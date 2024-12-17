// src/App.tsx
import React, { useEffect, useState } from 'react';
import './App.css';
import { 
  criarEvento, 
  mostrarEventos, 
  apostar, 
  definirResultado, 
  getApostas, 
  Evento, 
  Bet, 
  getContas, 
  web3 
} from './web3/web3';
import {
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  Typography,
  TextField,
  Grid,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
  Box,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

function App() {
  // Estados para armazenar os valores do formulário
  const [contaSelecionada, setContaSelecionada] = useState<string>('');
  const [contaEndereco, setContaEndereco] = useState<string>(''); // Para armazenar o endereço da conta selecionada
  const [nomeEvento, setNomeEvento] = useState<string>('');
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Estados para apostas
  const [eventoApostar, setEventoApostar] = useState<Evento | null>(null);
  const [valorAposta, setValorAposta] = useState<string>('');
  const [outcomeAposta, setOutcomeAposta] = useState<string>('1');

  // Estados para definir resultado
  const [eventoDefinir, setEventoDefinir] = useState<Evento | null>(null);
  const [resultadoDefinido, setResultadoDefinido] = useState<string>('1');

  // Estados para visualizar apostas
  const [eventoVisualizar, setEventoVisualizar] = useState<Evento | null>(null);
  const [apostas, setApostas] = useState<Bet[]>([]);
  const [loadingApostas, setLoadingApostas] = useState<boolean>(false);

  // Estados para feedback ao usuário
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
    open: false,
    message: '',
    severity: 'success',
  });

  useEffect(() => {
    atualizarEventos();
  }, []);

  /**
   * Função para buscar e atualizar a lista de eventos
   */
  const atualizarEventos = async () => {
    setLoading(true);
    try {
      const eventosObtidos = await mostrarEventos();
      setEventos(eventosObtidos);
    } catch (error) {
      mostrarSnackbar("Erro ao carregar eventos.", "error");
    }
    setLoading(false);
  };

  /**
   * Função para carregar as contas disponíveis
   */
  useEffect(() => {
    const carregarContas = async () => {
      try {
        const contas = await getContas();
        // Opcional: Você pode armazenar as contas se quiser exibi-las
      } catch (error) {
        console.error("Erro ao carregar contas:", error);
      }
    };
    carregarContas();
  }, []);

  /**
   * Manipulador de mudança para o Select de Conta
   * @param event - Evento de mudança
   */
  const handleChangeConta = async (event: SelectChangeEvent<string>) => {
    const contaIndex = event.target.value;
    setContaSelecionada(contaIndex);
    const contas = await web3.eth.getAccounts();
    if (contaIndex !== '') {
      const index = parseInt(contaIndex);
      if (!isNaN(index) && index >= 0 && index < contas.length) {
        setContaEndereco(contas[index]);
      } else {
        setContaEndereco('');
      }
    } else {
      setContaEndereco('');
    }
  };

  /**
   * Manipulador de mudança para o campo de nome do evento
   * @param event - Evento de mudança
   */
  const handleChangeNome = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNomeEvento(event.target.value);
  };

  /**
   * Função para exibir mensagens no Snackbar
   * @param message - Mensagem a ser exibida
   * @param severity - Tipo da mensagem ('success' ou 'error')
   */
  const mostrarSnackbar = (message: string, severity: 'success' | 'error') => {
    setSnackbar({
      open: true,
      message,
      severity,
    });
  };

  /**
   * Função para fechar o Snackbar
   */
  const handleCloseSnackbar = () => {
    setSnackbar({
      ...snackbar,
      open: false,
    });
  };

  /**
   * Função para criar um evento
   */
  const handleCriarEvento = async (event: React.FormEvent) => {
    event.preventDefault();
    if (nomeEvento.trim() === '') {
      mostrarSnackbar('Por favor, insira o nome do evento.', 'error');
      return;
    }
    if (contaSelecionada === '') {
      mostrarSnackbar('Por favor, selecione uma conta.', 'error');
      return;
    }

    const contaIndex = Number(contaSelecionada);
    if (isNaN(contaIndex) || contaIndex < 0 || contaIndex > 9) {
      mostrarSnackbar('Conta inválida.', 'error');
      return;
    }

    try {
      await criarEvento(nomeEvento, contaIndex);
      mostrarSnackbar('Evento criado com sucesso!', 'success');
      setNomeEvento('');
      setContaSelecionada('');
      setContaEndereco('');
      atualizarEventos();
    } catch (error: any) {
      mostrarSnackbar(`Erro ao criar evento: ${error.message}`, 'error');
    }
  };

  /**
   * Função para abrir o diálogo de aposta
   * @param evento - Evento selecionado para apostar
   */
  const abrirDialogAposta = (evento: Evento) => {
    setEventoApostar(evento);
    setValorAposta('');
    setOutcomeAposta('1');
  };

  /**
   * Função para realizar uma aposta
   */
  const handleApostar = async () => {
    if (!eventoApostar) return;
    if (valorAposta.trim() === '') {
      mostrarSnackbar('Por favor, insira o valor da aposta.', 'error');
      return;
    }
    const valorNum = parseFloat(valorAposta);
    if (isNaN(valorNum) || valorNum <= 0) {
      mostrarSnackbar('Valor da aposta inválido.', 'error');
      return;
    }

    const outcomeNum = parseInt(outcomeAposta);
    if (outcomeNum !== 1 && outcomeNum !== 2) {
      mostrarSnackbar('Resultado inválido. Use 1 para Cara ou 2 para Coroa.', 'error');
      return;
    }

    if (contaSelecionada === '') {
      mostrarSnackbar('Por favor, selecione uma conta.', 'error');
      return;
    }

    const contaIndex = Number(contaSelecionada);
    if (isNaN(contaIndex) || contaIndex < 0 || contaIndex > 9) {
      mostrarSnackbar('Conta inválida.', 'error');
      return;
    }

    try {
      await apostar(eventoApostar.eventoId, outcomeNum, contaIndex, valorAposta);
      mostrarSnackbar('Aposta realizada com sucesso!', 'success');
      setEventoApostar(null);
      atualizarEventos();
    } catch (error: any) {
      mostrarSnackbar(`Erro ao realizar aposta: ${error.message}`, 'error');
    }
  };

  /**
   * Função para abrir o diálogo de definir resultado
   * @param evento - Evento selecionado para definir resultado
   */
  const abrirDialogDefinirResultado = (evento: Evento) => {
    setEventoDefinir(evento);
    setResultadoDefinido('1');
  };

  /**
   * Função para definir o resultado de um evento
   */
  const handleDefinirResultado = async () => {
    if (!eventoDefinir) return;
    const resultadoNum = parseInt(resultadoDefinido);
    if (resultadoNum !== 1 && resultadoNum !== 2) {
      mostrarSnackbar('Resultado inválido. Use 1 para Cara ou 2 para Coroa.', 'error');
      return;
    }

    if (contaSelecionada === '') {
      mostrarSnackbar('Por favor, selecione uma conta.', 'error');
      return;
    }

    const contaIndex = Number(contaSelecionada);
    if (isNaN(contaIndex) || contaIndex < 0 || contaIndex > 9) {
      mostrarSnackbar('Conta inválida.', 'error');
      return;
    }

    try {
      await definirResultado(eventoDefinir.eventoId, resultadoNum, contaIndex);
      mostrarSnackbar('Resultado definido e fundos distribuídos com sucesso!', 'success');
      setEventoDefinir(null);
      atualizarEventos();
    } catch (error: any) {
      mostrarSnackbar(`Erro ao definir resultado: ${error.message}`, 'error');
    }
  };

  /**
   * Função para abrir o diálogo de visualizar apostas
   * @param evento - Evento selecionado para visualizar apostas
   */
  const abrirDialogVisualizarApostas = async (evento: Evento) => {
    setEventoVisualizar(evento);
    setLoadingApostas(true);
    try {
      const apostasObtidas = await getApostas(evento.eventoId);
      setApostas(apostasObtidas);
    } catch (error) {
      mostrarSnackbar("Erro ao carregar apostas.", "error");
    }
    setLoadingApostas(false);
  };

  /**
   * Função para traduzir o resultado numérico para texto
   * @param resultado - Resultado do evento (0, 1, 2)
   * @returns string
   */
  const traduzirResultado = (resultado: number): string => {
    switch (resultado) {
      case 0:
        return 'Não resolvido';
      case 1:
        return 'Cara';
      case 2:
        return 'Coroa';
      default:
        return 'Desconhecido';
    }
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Casa de Apostas
      </Typography>

      {/* Formulário para selecionar conta e criar evento */}
      <Card variant="outlined" style={{ marginBottom: '20px' }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Criar Evento
          </Typography>
          <form noValidate autoComplete="off" onSubmit={handleCriarEvento}>
            {/* Selecionar Conta */}
            <FormControl variant="outlined" fullWidth style={{ marginBottom: '20px' }}>
              <InputLabel id="conta-select-label">Conta</InputLabel>
              <Select
                labelId="conta-select-label"
                id="conta-select"
                value={contaSelecionada}
                onChange={handleChangeConta}
                label="Conta"
              >
                {/* Gerando opções de 0 a 9 */}
                {Array.from({ length: 10 }, (_, index) => (
                  <MenuItem key={index} value={index.toString()}>
                    Conta {index}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Campo para o nome do evento */}
            <TextField
              label="Nome do Evento"
              variant="outlined"
              fullWidth
              value={nomeEvento}
              onChange={handleChangeNome}
              style={{ marginBottom: '20px' }}
            />

            {/* Botão para criar o evento */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Criar Evento
            </Button>
          </form>
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        {/* Lista de Eventos */}
        <Grid item xs={12}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Eventos Disponíveis
              </Typography>
              {loading ? (
                <CircularProgress />
              ) : eventos.length === 0 ? (
                <Typography>Nenhum evento encontrado.</Typography>
              ) : (
                <List>
                  {eventos.map((evento) => (
                    <ListItem key={evento.eventoId} divider alignItems="flex-start">
                      <ListItemText
                        primary={
                          <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography variant="h6">{evento.nome_evento}</Typography>
                            <Box>
                              {!evento.finalizado && evento.criador.toLowerCase() !== contaEndereco.toLowerCase() && (
                                <Button 
                                  variant="contained" 
                                  color="secondary" 
                                  size="small" 
                                  style={{ marginRight: '10px' }}
                                  onClick={() => abrirDialogAposta(evento)}
                                >
                                  Apostar
                                </Button>
                              )}
                              {evento.finalizado && (
                                <Typography variant="body2" color="textSecondary">
                                  Resultado: {traduzirResultado(evento.resultado)}
                                </Typography>
                              )}
                            </Box>
                          </Box>
                        }
                        secondary={
                          <div>
                            <Typography variant="body2" color="textPrimary" gutterBottom>
                              <strong>Criador:</strong> {evento.criador} <br />
                              <strong>Total Bet Cara:</strong> {evento.totalBet1} ETH <br />
                              <strong>Total Bet Coroa:</strong> {evento.totalBet2} ETH <br />
                              <strong>Status:</strong> {evento.finalizado ? 'Finalizado' : 'Aberto'}
                            </Typography>
                            <Box marginTop="10px">
                              <Button 
                                variant="outlined" 
                                color="primary" 
                                size="small" 
                                style={{ marginRight: '10px' }}
                                onClick={() => abrirDialogVisualizarApostas(evento)}
                              >
                                Ver Apostas
                              </Button>
                              {!evento.finalizado && contaEndereco !== '' && evento.criador.toLowerCase() === contaEndereco.toLowerCase() && (
                                <Button 
                                  variant="contained" 
                                  color="success" 
                                  size="small" 
                                  onClick={() => abrirDialogDefinirResultado(evento)}
                                >
                                  Definir Resultado
                                </Button>
                              )}
                            </Box>
                          </div>
                        }
                        disableTypography={true}
                      />
                    </ListItem>
                  ))}
                </List>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Diálogo para Apostar */}
      <Dialog open={!!eventoApostar} onClose={() => setEventoApostar(null)}>
        <DialogTitle>Apostar no Evento: {eventoApostar?.nome_evento}</DialogTitle>
        <DialogContent>
          <FormControl variant="outlined" fullWidth style={{ marginBottom: '20px' }}>
            <InputLabel id="outcome-select-label">Resultado</InputLabel>
            <Select
              labelId="outcome-select-label"
              id="outcome-select"
              value={outcomeAposta}
              onChange={(e) => setOutcomeAposta(e.target.value as string)}
              label="Resultado"
            >
              <MenuItem value="1">Cara</MenuItem>
              <MenuItem value="2">Coroa</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Valor da Aposta (ETH)"
            variant="outlined"
            fullWidth
            value={valorAposta}
            onChange={(e) => setValorAposta(e.target.value)}
            type="number"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEventoApostar(null)} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleApostar} color="primary" variant="contained">
            Apostar
          </Button>
        </DialogActions>
      </Dialog>

      {/* Diálogo para Definir Resultado */}
      <Dialog open={!!eventoDefinir} onClose={() => setEventoDefinir(null)}>
        <DialogTitle>Definir Resultado para o Evento: {eventoDefinir?.nome_evento}</DialogTitle>
        <DialogContent>
          <FormControl variant="outlined" fullWidth style={{ marginBottom: '20px' }}>
            <InputLabel id="resultado-select-label">Resultado</InputLabel>
            <Select
              labelId="resultado-select-label"
              id="resultado-select"
              value={resultadoDefinido}
              onChange={(e) => setResultadoDefinido(e.target.value as string)}
              label="Resultado"
            >
              <MenuItem value="1">Cara</MenuItem>
              <MenuItem value="2">Coroa</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEventoDefinir(null)} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleDefinirResultado} color="primary" variant="contained">
            Definir Resultado
          </Button>
        </DialogActions>
      </Dialog>

      {/* Diálogo para Visualizar Apostas */}
      <Dialog open={!!eventoVisualizar} onClose={() => setEventoVisualizar(null)} fullWidth maxWidth="sm">
        <DialogTitle>Apostas do Evento: {eventoVisualizar?.nome_evento}</DialogTitle>
        <DialogContent>
          {loadingApostas ? (
            <CircularProgress />
          ) : apostas.length === 0 ? (
            <Typography>Nenhuma aposta encontrada.</Typography>
          ) : (
            <List>
              {apostas.map((aposta, index) => (
                <ListItem key={index} divider>
                  <ListItemText
                    primary={`Apostador: ${aposta.apostador}`}
                    secondary={
                      <>
                        <Typography component="span" variant="body2" color="textPrimary">
                          <strong>Valor:</strong> {aposta.amount} ETH <br />
                          <strong>Resultado:</strong> {traduzirResultado(aposta.outcome)}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEventoVisualizar(null)} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar para Feedback ao Usuário */}
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
