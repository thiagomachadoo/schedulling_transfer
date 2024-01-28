<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper black darken-1">
        <a href="#" class="brand-logo center">Painel de Transferências</a>
      </div>
    </nav>

    <div class="container">
      <form @submit.prevent="criarNovoUsuario">
        <label>Usuário</label>
        <input type="text" placeholder="Digite seu login para criar novo usuario" v-model="token.login"/>
        <label>Senha</label>
        <input type="text" placeholder="Digite sua senha para novo usuario" v-model="token.password"/>
        <button class="waves-effect waves-light btn-small">
          Salvar<i class="material-icons left">save</i>
        </button>
      </form>
      
      <form @submit.prevent="salvar">
        <label>Conta destino</label>
        <input type="text" placeholder="conta destino" v-model="transfer.accountToTransfer"/>
        <label>Valor</label>
        <input type="number" placeholder="Digite o valor da transferência" v-model="transfer.valueForTransfer"/>
        <label>Data da transferência</label>
        <input type="text" placeholder="data da transferência" v-model="transfer.dateToTransfer"/>
        <label>Data para agendamento da transferência</label>
        <input type="text" placeholder="data da transferência" v-model="transfer.schedulingDate"/>

        <button class="waves-effect waves-light btn-small">
          Salvar<i class="material-icons left">save</i>
        </button>
      </form>

      <table>
        <thead></thead>

        <tbody>
          <tr v-for="transfer of transfers" :key="transfer.id">
            <td>{{ transfer.id }}</td>
            <td>{{ transfer.accountToTransfer }}</td>
            <td>{{ transfer.valueForTransfer }}</td>
            <td>{{ transfer.dateToTransfer }}</td>
            <td>{{ transfer.schedulingDate }}</td>
            <td>
              <button class="waves-effect btn-small blue darken-1">
                <i class="material-icons">create</i>
              </button>
              <button class="waves-effect btn-small red darken-1">
                <i class="material-icons">delete_sweep</i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      
      <form @submit.prevent="pegarToken">
        <label>Usuário</label>
        <input type="text" placeholder="Digite seu login" v-model="token.login"/>
        <label>Senha</label>
        <input type="text" placeholder="Digite sua senha" v-model="token.password"/>
        <button class="waves-effect waves-light btn-small">
          Salvar<i class="material-icons left">save</i>
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import Transfer from "./service/transfer";
import Token from './service/token';


export default {

  data() {
    return {
      transfer : {
        accountToTransfer: '',
        valueForTransfer: '',
        dateToTransfer: '',
        schedulingDate: ''
      },
      transfers: [],
      token: {
        user:'',
        password:''
      }
    };
  },
  mounted() {
    Transfer.listar().then((response) => {
      console.log(response.data);
      this.transfers = response.data;
    });
  },

  methods: {
    salvar(){
      Transfer.salvar(this.transfer).then(response => {
        alert('Transferência salva com sucesso!', response)
      })
    },
    pegarToken(){
      Token.pegarToken(this.token).then(response => {
        alert('Token gerado com sucesso!', response)
      })
    },
    criarNovoUsuario(){
      Token.registrar(this.token).then(response => {
        alert('Usuário criado com sucesso!', response)
      })
    }
  }
};
</script>

<style>
</style>
