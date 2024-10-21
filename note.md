This is a important note that is _redirects file in public folder. The _redirect file has been created for a problem of Netlify. The problem was when I refresh another page except home page in a project which deploy in netlify then the page shows a error that is page isn't found. In order to solve this problem I have to use _redirects file. using this file the error is solved. 


In this file it is important to write /*    /index.html   200 this as it is.

It is important to make this file in public directory.

It is important to write file name as it is _redirects without any extension. Just _redirects .