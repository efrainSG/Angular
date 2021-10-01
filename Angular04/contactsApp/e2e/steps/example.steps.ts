'use strict';

var { Given } = require('cucumber');
var { When } = require('cucumber');
var { Then } = require('cucumber');

const mychai  = require('chai');
const ChaiAsPromised  = require('chai-as-promised');
const { title } = require('process');
const { browser } = require('protractor');
const { by } = require('protractor');
const { element } = require('protractor');

mychai.use(ChaiAsPromised);

const Expect = mychai.expect;

When('I navigate to {string}', function (site) {   
    return browser.get(site);
});

Then('The title should be {string}', function (title) {
    return Expect(element(by.id('TitlePage'))).to.eventually.eql(title);
});
     