---
title: "Semplice sistema di routing in PHP"
description: "Tutorial sullo sviluppo di un sistema di routing in PHP, il metodo più semplice possibile."
date: "2021-06-04"
categories:
  - PHP
---

Usare un sistema di routing in php può portare grandi vantaggi a un progetto.

Gli **URL** delle pagine web di un sito sono **molto importanti**, sia per i motori di ricerca, sia per gli utenti, che sempre di più li usano per navigare velocemente all’interno di un sito.

_Se per esempio l’url di una pagina che elenca una serie di articoli è http://www.nomesito.it/2019/05/15 l’utente, se conosce minimamente come funziona un browser ed il web, saprà già che se cancella il “15” dall’URL vedrà l’elenco degli articoli del mese, se cancella “05” vedrà l’elenco degli articoli dell’anno e così via._

Questo fa parte delle convenzioni che sono venute a crearsi nel corso di questi anni, e che è bene rispettare nella creazione di un sito web.

Una cosa che non mi è mai piaciuta dei primi siti web che realizzavo era vedere il “.php” alla fine dell’URL. Al giorno d’oggi sa veramente di poco professionale.

**Ma è possibile creare degli URL custom e SEO friendly senza utilizzare un CMS o un framework?**

La risposta è **assolutamente SI!!!**

Se sei interessato ad una semplice soluzione per “nascondere” il “.php” alla fine dell’URL leggi questo [articolo](/blog/nascondere-lestensione-alla-fine-dellurl/).

Se vuoi imparare ad utilizzare un semplice sistema di routing in PHP ecco come puoi fare.

## CREARE UN SISTEMA DI GESTIONE DEL ROUTING DEL SITO


{{< youtube lFtPh9eoPrc >}}

Andremo a **dirigere tutto il traffico alla index.php e poi eseguiremo un “routing” alla pagina che vogliamo**.

### Dirigere tutto il traffico alla index.php

Aprite il file .htaccess (se non esiste createlo) e inserite il seguente codice:

```
RewriteEngine On

RewriteBase /

RewriteCond %{REQUEST_FILENAME} !-d

RewriteCond %{REQUEST_FILENAME} !-f

RewriteRule ^(.+)$ index.php [QSA,L]
```

In questo modo qualsiasi richiesta verrà fatta al server questo aprirà il file “index.php”

### Creare un sistema di routing

Nel file index.php inserisci il seguente codice:

```
<?php

$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/' :
        require __DIR__ . '/views/index.php';
        break;
    case '' :
        require __DIR__ . '/views/index.php';
        break;
    case '/chi-siamoi' :
        require __DIR__ . '/views/chi-siamo.php';
        break;
    default:
        require __DIR__ . '/views/404.php';
        break;
}
```

In questo modo si salverà nella variabile **$request** la richiesta inviata al server (la parte dell’url dopo “www.nomesito.it”).

Dopodiché effettuando una switch si può richiamare la pagina corrispondente alla richiesta nell’URL. 

Nei casi in cui la richiesta sia vuota oppure uno “**/**” allora si rimanda alla **homepage**, altrimenti si può rimandare alla pagina corretta.

Nell’esempio ho creato una cartella “**views**” nella root del sito nella quale saranno presenti i file delle singole pagine. In questo modo il codice sarà anche più snello e capibile.

Infine è già presente anche la gestione dell’errore **404**, senza dover inserire altro codice nell’htaccess.

### Creare le views

A questo punto non ci resta che creare i file per le nostre **views**, cioè le pagine visualizzate dall’utente.

Potete creare semplicemente i seguenti file con il seguente codice in ognuno di essi:

**/views/index.php**

```
<h1>Home Page</h1>
```

**/views/chi-siamo.php**

```
<h1>Chi siamo</h1>
```

**/views/404.php**

```
<h1>Errore 404</h1>
```

E voilà! Avrete un sistema di routing in PHP semplice da gestire ma funzionale.

Questo sistema è alla base di [Orange CMS](https://orange.albydev.net/), il mio CMS realizzato in php. Ampliandolo a dovere è possibile raggiungere risultati molto soddisfacenti.

Spero possa esservi di aiuto.

_Buon codice!_

Se l’articolo ti è stato **utile** lasciami un commento oppure condividilo sui social, lo **apprezzerei** molto!
