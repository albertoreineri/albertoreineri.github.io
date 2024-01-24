---
title: Ho creato un mio CMS
description: "Ho creato un CMS in core PHP, vi racconto perché e come l'ho fatto."
author: Alberto Reineri

date: 2019-11-02T21:29:00+00:00
categories:
  - Personal

---
**WordPress** è una piattaforma fantastica, un gran CMS, permette di gestire i contenuti dei siti web in maniera relativamente semplice e veloce, offre una vastissima gamma di plugin e consente di realizzare progetti in maniera rapida ed efficace.

Però ci sono alcune cose in WordPress che **non mi sono mai piaciute**… Due in particolare:

## 1. LA LENTEZZA

In primo luogo la lentezza. Anche sviluppando un **tema custom** Wordpress inserisce delle **dipendenze** delle quali **non si può fare a meno** e che vanno a rallentare il caricamento della pagina.

Inoltre ogni plugin inserisce i propri file CSS e JS in tutte le pagine del sito, a prescindere dal fatto che mi servano solamente in home page o in una singola pagina interna. (Questo su può ovviare rinunciando ai plugin e utilizzando una soluzione completamente custom, ma in questo caso i tempi di sviluppo si allungano…).

Lo stesso sito creato con WordPress oppure senza ha tempi di caricamento molto minori! Se vuoi fare alcune prove utilizza questi due servizi, vedrai che i siti sviluppati in WordPress saranno più lenti, anche utilizzando hosting più costosi e performanti:

  * <https://tools.pingdom.com/>
  * <https://developers.google.com/speed/pagespeed/insights/?hl=IT>

Per un test del sito web più completo puoi utilizzare il tool sviluppato da [Digitale.co][1] che permette di scansionare più pagine in un colpo solo. In questo modo si può risparmiare tempo e avere una panoramica migliore e più ampia sulle performance di un sito web! Ecco il link al tool!

  * <a href="https://www.digitale.co/pagespeed" target="_blank" rel="noreferrer noopener nofollow">https://www.digitale.co/pagespeed</a>

## 2. IL BACKEND

In secondo luogo il backend è molto bello e semplice, ma non sempre. **L’impossibilità di intervenire in maniera invasiva** sul backend mi ha sempre frustrato parecchio.

Certo, possiamo creare dei Custom post, dei campi personalizzati con Advanced Custom Fields, possiamo anche cambiare lo schema colori del back-end, creare una login personalizzata etc, ma non abbiamo le libertà di una piattaforma creata completamente da zero, nella quale possiamo decidere tutto ciò che vogliamo.

Non mi è mai piaciuto sentirmi “schiavo” di un software, dover obbedire alle sue leggi senza possibilità di intervenire ovunque io voglia.

Ho sempre voluto creare una piattaforma completamente mia, da poter gestire in completa autonomia, adattabile al 100% a tutte le soluzioni.

## IL MIO CMS

Per questo ho creato **<a href="/orange" target="_blank" rel="noreferrer noopener">Orange CMS</a>.**

Ho sempre amato la programmazione, ed utilizzare sempre codice scritto da altri non mi è mai piaciuto. Sono uno sviluppatore e voglio sviluppare, solo così si può imparare ed andare sempre avanti!

Sia ben chiaro, **non ho reinventato la ruota**. Ho usato una serie di script sviluppati in passato e alcune librerie online e poco per volta ho creato questa piattaforma.

Ho utilizzato:

  * <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer noopener">Bootstrap</a>
  * <a href="https://ckeditor.com/" target="_blank" rel="noreferrer noopener">CKEditor</a>
  * <a href="https://ckeditor.com/ckfinder/" target="_blank" rel="noreferrer noopener">CKFinder</a>
  * <a href="https://datatables.net/" target="_blank" rel="noreferrer noopener">DataTables</a>
  * <a href="https://fengyuanchen.github.io/datepicker/" target="_blank" rel="noreferrer noopener">DatePicker</a>

Se con WordPress riuscivo ad essere efficace, con Orange CMS posso dire di essere efficiente!

I tempi di sviluppo sono più o meno gli stessi, ma con Orange CMS posso:

  * creare un sistema di caricamento dati sviluppato apposta per le esigenze del progetto, andando a ridurre notevolmente i tempi di caricamento dei contenuti
  * creare url completamente customizzabilie e SEO friendly grazie ad un pratico [sistema di routing][2]
  * creare sezioni specifiche per i contenuti del sito
  * avere tempi di caricamento brevissimi
  * avere un login sicuro, con passwork codificate

**Alcuni siti** realizzati con Orange CMS:

  * <a href="http://danzeoccitane.altervista.org/" target="_blank" rel="noreferrer noopener">danzeoccitane.altervista.org</a>
  * <a href="http://eventicuneo.it/" target="_blank" rel="noreferrer noopener">eventicuneo.it</a>
  * <a href="http://studiomacdesign.it/" target="_blank" rel="noreferrer noopener">studiomacdesign.it</a>
  * <a href="http://associazionefedercasa.it/" target="_blank" rel="noreferrer noopener">associazionefedercasa.it</a>

Questo **non significa che smetterò di utilizzare WordPress**, per un blog sono convinto che sia sempre la soluzione migliore, ma credo che lo utilizzerò sempre meno.

Grazie per aver letto questo articolo.

Buon codice!

 [1]: https://www.digitale.co/
 [2]: /blog/semplice-sistema-di-routing-in-php