---
title: Piccolo progetto open source
description: "Ho rilasciato un piccolo progettino open source per creare un'area riservata in core php"
author: Alberto Reineri

date: 2020-08-31T10:32:00+00:00
categories:
  - Personal

---
Ho pubblicato su <a href="https://github.com/albertoreineri/Simple-login-and-registration-in-php" target="_blank" rel="noreferrer noopener">github </a>un piccolo **progettino open source** che probabilmente amplierò in futuro.

Avrei voluto pubblicare tutto **<a href="/orange" target="_blank" rel="noreferrer noopener">Orange CMS</a>**, ma visto che crearlo è stato un lavoro molto grande e che per poterlo caricare su github dovrei ancora lavorarci su per renderlo scaricabile, installabile e capibile da tutti, per il momento **ho iniziato a pubblicare solamente una piccola base** per poter creare una propria area riservata in php.

E’ un modulo di login **molto semplice** da utilizzare, **vuole essere un’idea per iniziare a sviluppare un backend**, un punto dal quale partire.

## Come si usa?

E’ molto **semplice**! Basta seguire i seguenti passaggi:

  * Clona la repo nella cartella del tuo sito web
  * Crea un database in phpmyadmin
  * Importa “user.sql” dalla cartella “database”
  * Inserisci i parametri corretti nel file “login/config.php”
  * Vai su “il-tuo-sito/login”
  * Effettua il login o crea un nuovo utente

_Utente di default:_

_– Username: user_

_– Email: user@user.com _

_– Password: Username1!_

Se stai cercando qualche risorsa per poter creare un’area di amministrazione, un backend o una web app, allora questo modulo può fare per te.

## Framework

È vero che oggi esistono molti framework che offrono questa funzionalità già integrata, ma non sempre sono la scelta migliore.

Tutto dipende dalla tipologia di progetto. Se si tratta di un grande progetto scalabile allora sicuramente è meglio orientarsi su un framework solido e ampiamente testato (sempre open source).

Se invece si tratta di un piccolo portale web, una web app semplice o di un progetto sviluppato da un singolo sviluppatore senza particolari funzionalità impegnative, allora penso che si possa fare tutto da zero.

Spero che possa essere di aiuto!

_Buon codice!!!_