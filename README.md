[![Build Status](https://travis-ci.org/teraxas/dynaform-compiler.svg?branch=master)](https://travis-ci.org/teraxas/dynaform-compiler)

# dynaform-ng dynamic forms compiler

This is a nodeJS lib for building finalized JSON objects of forms.
Mostly it includes resources, such as classifiers, to form objects.

[![NPM](https://nodei.co/npm/dynaform-compiler.png)](https://www.npmjs.com/package/dynaform-compiler)

## DFormCompiler

Compiler's constructor requires IResourceProvider object.
Then just use `compile(form: DForm)` method to compile form.

