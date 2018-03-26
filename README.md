# Vlink introduction
## What are Vlink doing for you?
Vlink is a mini app which can covert website url to a Snapshot and save on your computer or online database. It is kind of note book which is used for store links as its content but it will convert them to more intuitive format and classify them for storage. This app will help the person who need frequently review lots of  documents online and need an intuitive direct way to find them. Additionally, The Demo Version will have much limitation on features.


## The technologies Vlink using
* Front end: React.js, Redux.js.
* Back end: based on Node.js , Express.js and MongoDb (for production version)

## The features Vlink Demo Version has and operation instruction
* Top Menu Choose existing categories and add link to it.left-top Conner <select> and the middle AddLink <button> Create Categories : Right-top Conner <button>
* Left Sidebar Reset the content to initial content and wipe the localStorage :First button of the Sidebar Homepage, demo, etc buttons will help you filter the link list.The second and more buttons of the Sidebar
* Link List Show the links by their categories. Each link will be a snapshot of the url with a logo, title and website description.

## What this Demo Version doesn’t have
* Saving links to online database
* Searching function
* Paging function
* Delete links or categories
* Fancy layout

## Install instruction
1.You must have Node.js installed on your computer.
2.Unzip the vlinkdemo.zip and you will see the folder tfdemo.
3.In the terminal, go to the tfdemo folder and run `npm install`.
4.Then, run `node index.js` .
5.In the browser’s address, input http://localhost:8000/ and you will see it.
