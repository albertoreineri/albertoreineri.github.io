---
title: Come ho creato un’app per le note
description: "Vi racconto come ho creato una semplice app per le note come Side Project"
author: Alberto Reineri

date: 2020-08-03T21:57:00+00:00
categories:
  - Personal
  - Web Dev

---
In rete esistono **molte app per le note.** Le ho provate quasi tutte ma **nessuna ha mai soddisfatto al pieno le mie esigenze**.

Quando cerco un’app per le note ho bisogno di alcune cose **fondamentali**:

  * Grafica **piacevole** e minimale (odio il superfluo)
  * Modalità **notte**
  * Facilità di **formattazione** (non devo far granché, ma almeno poter inserire il grassetto in maniera semplice e veloce)
  * Disponibile su **tutti i dispositivi** (odio dover usare per forza il pc o lo smartphone e non poter condividere)

Una volta che ho capito come avrei voluto avere la mia app per le note non mi restava altro che **iniziare a crearla!**

Così è nata <a href="https://www.albynotes.albydev.net/" target="_blank" rel="noreferrer noopener">Albertonotes</a>!

Ho preso spunto soprattutto dall’app <a href="https://apps.apple.com/it/app/note/id1110145109" target="_blank" rel="noreferrer noopener">Note</a> di Apple e da <a href="https://simplenote.com/" target="_blank" rel="noreferrer noopener">Simplenote</a>, due fantastiche app, ma la prima è disponibile solo su **iPhone**, **iPad** e **Mac**, mentre la seconda permette la formattazione solo in **markdown** e bisogna sempre _switchare_ fra testo editato e renderizzato, non proprio il massimo…

Ho così deciso di **prendere il meglio da entrambe** e metterlo inseme in qualcosa di mio.

## Ho utilizzato:

### PHP e MySQL

Ho pensato di fare tutto in Javascript, magari con Node JS, ma lo [stack **php e mysql**][1] lo conosco molto bene e visto che si tratta di un side project ho scelto la via più semplice per me

### Ajax

Per evitare il reload della pagina ad ogni salvataggio, cambio di nota etc. ho utilizzato delle chiamate ajax.

In questo modo **la pagina è sempre fissa**, cambia solo il contenuto di alcune sessioni. se riuscirò a creare anche le varie app desktop e mobile questa funzionalità sarà molto utile, oltre che dare una piacevole esperienza utente

### Quill JS

Per formattare le note ho utilizzato **<a href="https://quilljs.com/" target="_blank" rel="noreferrer noopener">Quill JS</a>**, un fantastico editor in Javascript molto semplice da implementare e gestire.

Sono stato a lungo indeciso, in passato utilizzavo spesso <a href="https://ckeditor.com/ckeditor-4/demo/#inline" target="_blank" rel="noreferrer noopener">CkEditor</a> ma è un po’ pesantuccio. Mi interessava anche <a href="https://editorjs.io/" target="_blank" rel="noreferrer noopener">Editor Js</a>, molto bello graficamente ma mi è sembrato ancora un po’ agli inizi.

Quill JS è per me la scelta migliore, almeno per il momento.

### Orange Framework

Non ne ho ancora parlato molto ma ho costruito un mio framework in php per creare le mie web app.

Ho lavorato con **Laravel** e **CodeIgniter**, ma mi trovo meglio a fare tutto da me. Voglio precisare che non si tratta di reinventare la ruota come molti dicono, ma di sviluppare le cose per bene la prima volta e riutilizzarle in seguito.

Ho iniziato creando il modulo di login, poi studiando un’architettura software decente e ora ho una struttura abbastanza pronta all’uso e soprattutto portable. Posso copiare i singoli moduli che mi interessano da un progetto all’altro, modificare il file di configurazione e sono sicuro che funzionano.

Potete provare l’app qui: [https://www.albynotes.albydev.net][2]

Sono ancora in **fase beta**, quindi ogni consiglio o segnalazione di bug è ben accetto!

Fammi sapere nei commenti cosa ne pensi o se vuoi saperne di più.

Spero che questo articolo sia stato interessante.

 [1]: /blog/cms-framework-o-core-language/
 [2]: https://typewrite.reineristudio.com/