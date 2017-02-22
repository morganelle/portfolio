'use strict';

page('/journal', journalController.display);
page('/projects', projectsController.display);
page('/', homeController.display);
page();
