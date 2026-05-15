let account = [
    {id: 1, name: "john doe", balance: 1000},
    {id: 2, name: "jane doe", balance: 2000}

]

///get all accounts
exports.getAccounts = (req, res) => {
    res.json(account);
}

//create a new account
exports.createAccount = (req, res) => {
    const newAccount = {
        id: account.length + 1,
        name: req.body.name,
        balance: req.body.balance
    }
    account.push(newAccount);
    res.json(newAccount);
}

//get on account by id
exports.getAccountById = (req, res) => {
    const acc = account.find(a => a.id === parseInt(req.params.id));
    if(!acc) return res.status(404).send("account not found");
    res.json(acc);
}

//update an account by id
exports.updateAccountById = (req, res) => {
    const acc = account.find(a => a.id === parseInt(req.params.id));
    if(!acc) return res.status(404).send("account not found");
    acc.name = req.body.name;
    acc.balance = req.body.balance;
    res.json(acc);
}

//delete an account by id
exports.deleteAccountById = (req, res) => {
    account = account.filter(a => a.id !== parseInt(req.params.id));
    res.json({message: "accoount deleted"})
}
