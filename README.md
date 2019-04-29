# _Furniture Store Inventory_

#### _Furniture Store Inventory webpage, 04/25/2019_

#### By _**Yulia Shidlovskaya**_

## Description

_This page allows to explore the inventory of the Furniture Store._

## Specifications

* The webpage should show all available items from the furniture store.
  * Example: all items are shown in the table on the page.
* The webpage should show short description of each item.
  * Example: each item in the table has an image, ID, type, name, # in stock, price and available colors.
* The webpage should outline if an item is currently out of stock.
  * Example: if the item is out of stock it is shown "stock: 0" in bold and red under item's description in the table.
* The user should be able to click the specific item to see all details.
  * Example: if the user click on the item in the table the details pops up in the center of the page.
* The details should include all available item's details.
  * Example: the details information includes: item's image, ID, type, stock, name, price, description, and available colors.
* The user should be able to filter the items shown on the page.
  * Example: the filter section is to the right from the items' table.
* The user should be able to search by name/ID.
  * Example: there is the input box in the filter section where the partial name of ID can be entered. If the user enters "0005" and clicks "Search" button, there will be only items in the table which ID or name includes "0005".
* The user should be able to clear search results.
  * Example: button "Clear" set all the setting to their initial states: all input boxes are empty, all checkboxes are checked, the table shows all available items.
* The user should be able to filter items by types: the filter section allows to select any number of available types of furniture, all items of these types are shown in the table after clicking the button "Search".
  * Example: if only "sofa" and "rug" types are chosen, there are only sofas and rugs are shown in the table.
* The user should be able to filter items by colors: the filter section allows to select any number of available colors of furniture, all items of these colors are shown in the table after clicking the button "Search".
  * Example: if only "yellow" and "green" colors are chosen, there are only items available in yellow and green are shown in the table.
* The user should be able to combine any filter together.
  *Example: if the chosen type is "sofa" and the chosen color is "brown", there are only brown sofas shown in the table.

## Setup/Installation Requirements
* _Navigate your web browser to https://github.com/sjullieb/furniture-store_
* _Click the green button "Clone or download" on the repository page._
* _To download the repository choose "Open in Desktop" or "Download Zip"._
* _Alternatively, to clone the repository, type "git clone https://github.com/sjullieb/furniture-store in the terminal" (note: git should be installed on your PC).  For more information visit GitHub Help section Cloning a repository from GitHub:
https://help.github.com/articles/cloning-a-repository-from-github/_
* _Open index.html in your web browser of choice._

## Support and contact details

_For support please contact me at Epicodus_

## Technologies Used

_This website was created using HTML, CSS, the Bootstrap CSS file, Javascript, and the jQuery javascript file._
_The data is retrieved from the Furniture Stores API: https://it771mq5n2.execute-api.us-west-2.amazonaws.com/production/furniture_

### License

*MIT License*

*Copyright (c) 2019 Yulia Shidlovskaya*

*Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:*

*The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.*

*THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*
