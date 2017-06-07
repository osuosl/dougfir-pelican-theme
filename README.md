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

### Settings

**GOOGLE_ANALYTICS**: Set to your tracking code to activate Google Analytics

**GOOGLE CALENDAR**:

To use the Google Calendar widget, you will need three things: an API Key, an
OAuth Client ID, and a Calendar ID.

To generate the API Key and Client ID:
1. Go to https://console.developers.google.com/.
2. Create a new project if you don't already have one.
3. Go to Library, select or search for the Google Calendar API, and enable it.
4. Go to Credentials.
5. Click Create Credentials, and click API Key.
  a. For testing, simply copy the API key into your pelicanconf.py as the value
     GAPPS_API_KEY.
  b. For production, click Restrict Key, and add a restriction according to the
     prompt. Then copy the key to your pelicanconf.py as the value GAPPS_API_KEY.
6. Get back to the Credentials screen, then click Create Credentials, then OAuth
   Client ID. Select Web Application, and enter the URI of your website (or
   localhost for testing). Copy the Client ID to the pelicanconf.py under the
   value GAPPS_CLIENT_ID.

For the calendar ID, it will be in the form of an email address. The easiest way
to get it is from the calendar's HTML URI, in which it will be the value of
the ``src`` parameter (make sure you replace ``%40`` with ``@``).

For example, if the URI is ``https://calendar.google.com/calendar/embed?src=oregonstate.edu_s37pfj8sngtqk8s9fj66pslji8%40group.calendar.google.com&ctz=America/Los_Angeles``, the Calendar ID will be
``oregonstate.edu_s37pfj8sngtqk8s9fj66pslji8@group.calendar.google.com``.

Add that to your pelicanconf.py under the value CALENDAR_ID.

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
