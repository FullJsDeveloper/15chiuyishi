class BankAccount {
    constructor(ownerName, accountNumber) {
      this.ownerName = ownerName
      this.accountNumber = accountNumber
      this.balance = 0
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`${this.ownerName}ning hisob raqamiga ${amount} so'm qo'shildi. Joriy balans: ${this.balance} so'm`)
    }
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`${this.ownerName}ning hisob raqamidan ${amount} so'm yechib olingan. Joriy balans: ${this.balance} so'm`)
      } else {
        console.log(`Xatolik: ${this.ownerName}ning hisob raqamida yetarli mablag' mavjud emas.`)
      }
    }
  
    showBalance() {
      console.log(`${this.ownerName}ning hisob raqamidagi joriy balans: ${this.balance} so'm`)
    }
  }
  
  const user1 = new BankAccount("Sardor", "1234567890")
  const user2 = new BankAccount("Akmal", "0987654321")
  
  user1.deposit(500)
  user1.showBalance()
  user1.withdraw(200)
  user1.showBalance()
  
  user2.deposit(1000)
  user2.showBalance()
  user2.withdraw(1500)
  user2.showBalance()