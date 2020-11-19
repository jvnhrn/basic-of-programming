FROM httpd:2.4
LABEL maintainer="j.von.horn@hotmail.com"
COPY ./public-html/ /usr/local/apache2/htdocs/
