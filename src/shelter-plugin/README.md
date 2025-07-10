# Couve Dev Plugin for Shelter

This is a simple plugin for [shelter](https://shelter.uwu.network/) that loads Couve for dev purposes.

### Why?

I primarily use vencord, and at the time of writing, running vencord with shelter breaks hot-reload of css (in vencord). Other client mods don't seem effected .

Shelter (and its plugin ecosystem) also lacks the ability to load local themes with hot-reload functionality, so using a custom plugin in dev mode is the easiest option.

### Running

You'll need to run these commands in two different terminal instances:

`pnpm run dev-shelter` and `pnpm run dev-shelter-plugin`. Make sure you have run `pnpm i` first.
