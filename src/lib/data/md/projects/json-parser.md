# JSON Parser · [![Unit Tests](https://github.com/RiadhAdrani/json-parser/actions/workflows/tests.yml/badge.svg)](https://github.com/RiadhAdrani/json-parser/actions/workflows/tests.yml)

A side project, made mainly for the purpose of learning the C language.

## Features

Supports most of the JSON specs.

- `null` : supported.
- `boolean` : true and false.
- `number` : converted to the **double** type, throwing when an overflow or underflow happens. scientifique notation with e/E is supported.
- `string` : supported.
- `array` : supported as a linked list. trailing commas are not allowed.
- `object` : supported as a hash table with collision handldling, no duplicate keys allowed. trailing commas are not allowed.

Check `/tests` for more edge cases.
