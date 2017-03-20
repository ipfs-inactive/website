# The hugo theme for ipfs.io

- content/
  - blog/
    - 123-example.md
  - docs/
    - install.md
    - api.md
  - contact.md
  - legal.md
  - media.md
  - press.md
- static/
  - asciinema/
  - blog/
    - image.jpg
  - docs/
    - diagram.png
- themes/
  - ipfsio/
    - static/
      - css/
      - images/
      - fonts/
      - js/
      - Gruntfile.js
      - package.json
    - layouts/
      - _default/
        - single.html (any non-list page)
        - list.html (any list page)
      - index.html (homepage)
    - theme.toml

pagetype => $.Param.pagetype
- home
- major
- subdoc
