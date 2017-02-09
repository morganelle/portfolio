'use strict';

function Project(name, clientName, link, summary, longDescription, coverImage) {
  this.name = name;
  this.clientName = clientName;
  this.category; // need to decide if this should be an array
  this.link = link;
  this.summary = summary;
  this.longDescription = longDescription;
  this.coverImage = coverImage; // need to set up image folder structure first
  this.supportImages; // need to set up image folder structure first
}

function Blog(title, images, longDescription, date) {
  this.title = title;
  this.images = images; // need to set up image folder structure first
  this.longDescription = longDescription; // probably need to figure out a good way to pass this to the object
  this.date = date;
  this.author = 'Morgan Nomura';
}
