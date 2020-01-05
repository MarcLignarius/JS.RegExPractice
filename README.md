 
# _RegEx Practice_

#### _Teaching myself how to use regular expressions._

#### By _**Marc Davies**_

## Description
 
_This application consists of various practice exercises using regular expressions to validate:_
 
* _Passwords_ 
* _URLs_ 
* _HTML tags_ 
* _Duplicates_

## Setup/Installation Requirements

* _Clone from GitHub_
* _Open index.html_
* _Alternatively, click <a href="https://marclignarius.github.io/JS.RegExPractice/">HERE</a> to visit the GitHub Pages site_

## Specs

| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| User enters a password which does not meet all given instructions | abcdef | Password is invalid. Please enter a new password. |
| User enters a password which meets all given instructions | @bcd3F | Password is valid. |
| User enters a URL which does not meet all given instructions | https://<span></span>github | URL is invalid. Please enter a new URL. |
| User enters a URL which meets all given instructions | https://<span></span>github<span></span>.com | URL is valid. |
| User enters a HTML tag which does not meet all given instructions | <code>< ul ></code> and <code>< ul ></code> (without spaces) | HTML tag is invalid or was not coded into the regular expression. Coded tags include ul, ol and li. |
| User enters a HTML tag which meets all given instructions | <code>< ul ></code> and <code>< /ul ></code> (without spaces) | HTML tag is valid. |
| User enters a sentence which does not meet all given instructions | hellohello | No word is duplicated in this sentence, or the duplicates are not space separated. Please enter another sentence. |
| User enters a sentence which meets all given instructions | hello hello | One or more words have duplicates in this sentence. |

## Known Bugs

_None as of last update_

## Support and contact details

_Please contact me via <a href="https://www.linkedin.com/in/marcdaviesriot/">LinkedIn</a> if you run into any issues or have questions, ideas or feedback._

## Technologies Used

_HTML, CSS, JS, Bootstrap, jQuery_

### License

*This software is licensed under the GPL license.*

Copyright (c) 2019-2020 **_Marc Davies_**
