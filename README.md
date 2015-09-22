# OSU Open Source Lab Site Theme
Mimic of the Oregon State University Doug Fir Drupal Theme for the OSU Open
Source Lab Website

This theme is currently being used by the
[OSL Pelican Site](https://github.com/osuosl/osuosl-pelican) on the
[master branch](https://github.com/osuosl/dougfir-pelican-theme/tree/master) and
by the [OSU CASS Pelican Site](https://github.com/osuosl/cass-pelican) on the
[cass-pelican branch](https://github.com/osuosl/dougfir-pelican-theme/tree/cass-pelican)

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

* `:order:`

  Required integer on all pages (including blog posts), the top menu items
  (`thingN` above) must be in incremental order unseparated by submenu items

* `:title:`

  Sets the label for the menu item, not required if page title exists (when
  using RestructuredText)

* `:top_menu:`

  If set to `parent`, this item exists in the top portion of the menu

* `:menu_child:`

  If this field matches another page's `menu_parent` field, that page will be
  placed under this page in the child position. This field is required whenever
  a menu item will have a child **or** a grandchild.

* `:menu_parent:`

  See `menu_child`

* `:duplicate_name:`

  Allows a page to be listed in the top menu as well as directly below it in the
  corresponding submenu. The label will be set to the `duplicate_name` value

* `:menu_gchild:`

  Same relationship to `menu_parent` as `menu_child`, but for a grandchild
