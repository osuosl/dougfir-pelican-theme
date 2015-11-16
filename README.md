# OSU Open Source Lab Site Theme
Mimic of the Oregon State University Doug Fir Drupal Theme for the OSU Open
Source Lab Website

This theme's master branch is currently being used by the
[OSL Pelican Site](https://github.com/osuosl/osuosl-pelican) and the
[OSU CASS Pelican Site](https://github.com/osuosl/cass-pelican).

Usage
-----

This theme is intended to provide general formatting for pelican sites used by
the OSU Open Source Lab. Several features are implemented in a very general way
to allow for usage by different websites. These features require additional
setup in the website themselves.

### Menu

This theme creates a main menu in the following format:

```
thing1              thing2              thing3      thing4
   |                   |                   |           |
child1              child1 -- gchild1   child1      child1
   |                   |         |         |           |
child2 -- gchild1   child2    gchild2   child2      child2
   |         |                   |                     |
child3    gchild2             gchild3               child3
   |                                                   |
child4                                              child4 -- gchild1
                                                                 |
                                                              gchild2
```

The main menu is generated using Jinja2 templating. This requires metadata in
the static webpages:

* `:menu: <parent_name>, <page_name>, <menu_weight>; <parent2>, <name2>, <weight2>; ...`

  This metadata is required for pages to be included in the menu. Each menu
  location is delimited by a semicolon (';'). Menu items can have one or
  multiple locations in the menu.

  - `<parent_name` is the name of the menu item above the current item
  - `<page_name>` is the name of the current item that will be displayed in the
     menu
  - `<menu_weight>` is the weight of the menu item. Items with higher weights
    appear lower on the menu.

* `:slug: path/to/rendered/file`

  This is used as the link in the ``<a href=''>`` tag.

#### Direct Templates

Direct templates are their own animal. You cannot add metadata to a direct
template, so if you want to include one in your menu you have to add the
information directly to the site's `pelicanconf.py` like this:

```
DIRECT_TEMPLATE_INFO = [
        {'parent': u'top', 'link': '/blog', 'name': 'Blog', 'weight': 5, 'children': []}]
```
