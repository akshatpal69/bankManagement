let queries = {

    getUserIDquery : `select totalnumber from customercount;`,
    









    testQuery :'',
    queryAllFrom : 'SELECT * FROM',
    testInsertQuery: 'INSERT INTO test (id, name) VALUES (5,"akshat")',
    testForeignKey: `create table test2(id int(5) primary key, lname varchar(5), foreign key(id) references test(id))`,
    finalforeignkey : `alter table address add foreign key (idaddress) references customer(idaddress) ;`
}
module.exports = queries