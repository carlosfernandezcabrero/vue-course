<template>
  <div>
    <h3>
      Account balance &rarr; <span class="badge bg-dark">{{ balance }}$</span>
      <button
        role="button"
        class="btn fr"
        :class="stateAccountC"
        @click="changeStatusAccount()"
      >
        Savings account
      </button>
    </h3>
    <hr />
  </div>
  <div class="report" v-show="stateAccount">
    <div class="actions mb-3 text-center">
      <ActionButton action="Increase" @doAction="increaseBalance" /> &nbsp;
      <ActionButton
        action="Decrease"
        @doAction="decreaseBalance"
        :deactive="alertState"
      />
    </div>
    <div class="alert alert-danger mb-4" role="alert" v-show="alertState">
      You haven't more money in the accounts
    </div>
    <div class="details">
      <div class="card mb-4" v-for="account in accounts" :key="account.id">
        <div class="card-body">
          <h5 class="card-title">{{ account.id }}</h5>
          <p class="card-text">{{ account.bank }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActionButton from "./ActionButton";

export default {
  components: {
    ActionButton,
  },
  data() {
    return {
      balance: 700,
      stateAccount: false,
      alertState: false,
      accounts: [
        { id: "ES9098", bank: "BBVA" },
        { id: "ES6756", bank: "Santander" },
      ],
    };
  },
  methods: {
    changeStatusAccount() {
      this.stateAccount = !this.stateAccount;
    },
    increaseBalance() {
      this.alertState = false;
      this.balance += 100;
    },
    decreaseBalance() {
      const preBalance = this.balance - 100;
      if (preBalance === 0) {
        this.alertState = true;
      }
      if (preBalance < 0) {
        return;
      }
      this.balance = preBalance;
    },
  },
  computed: {
    stateAccountC() {
      return this.stateAccount ? "btn-success" : "btn-danger";
    },
  },
};
</script>

<style scoped>
.fr {
  float: right;
}
</style>
