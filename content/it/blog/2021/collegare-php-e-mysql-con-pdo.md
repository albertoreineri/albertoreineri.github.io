---
title: "Collegare PHP e MySQL con PDO"
description: "Tutorial su come collegare PHP ad un Database MySQL tramite PDO!"
date: "2021-06-30"
author: "Alberto Reineri"
categories:
  - PHP
---

Collegare un database MySQL ad un progetto [PHP](/categories/php/) è quasi sempre fondamentale, vediamo come farlo utilizzando PDO.

È possibile continuare ad utilizzare MySQLi, ma [PDO](https://www.html.it/pag/63991/pdo-vs-mysqli/) garantisce livelli di sicurezza maggiori.

{{< youtube x_2koTcxdDg >}}

La procedura è molto semplice, vediamo come fare:

Per prima cosa definiamo le variabili di connessione al nostro database:

```
$servername = "localhost";
$username="root";
$passworddb="root";
$dbname="dbname";
```

Ora non ci resta che effettuare la connessione vera e propria, in questo modo:

```
try{
    $db = new PDO("mysql:=$servername;dbname=$dbname", $username, $passworddb);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e){
    print "Errore! ". $e->getMessage() ." <br/>";
    die();
}
```

Con questo effettueremo la connessione al nostro DB e genereremo un messaggio in caso di errore, in modo da velocizzare il debug.

Ora non ci resta che testare la connessione. Aprendo il file contenente questo codice dovrete vedere una pagina completamente bianca, se è così allora la connessione funziona, altrimenti dovrete vedere un messaggio di errore.

Per essere ancora più sicuri della connessione proviamo a inserire dei dati nel nostro db e andarli a prendere e stampare sulla pagina PHP.

In questo esempio ho creato una tabella “Users” con all’interno un campo “Nome”. Ora andiamo a stampare tutti i dati all’interno di questa tabella:

```
// Seleziono da DB
$query = $db->prepare("SELECT * FROM Users");
$query->execute();
$query->setFetchMode(PDO::FETCH_ASSOC);
while($row = $query->fetch()){
    echo $row['nome']. "<br>;
}
```

E Voilà! Se vi appare l’elenco dei nomi che avete inserito nel DB allora la connessione del php con MySQL attraverso PDO è fatta, non resta che svilupparci la web app intorno!

_Buon codice!_
