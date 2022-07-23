/**
 * @summary     WOOF SD Interactive Element
 * @description multipurpose interactive element
 * @version     1.0.0
 * @file        ie
 * @author      Rostislav Sofronov <realmag777>
 * @contact     https://pluginus.net/contact-us/
 * @github      https://github.com/realmag777/ie
 * @copyright   Copyright 2022 PluginUs.Net
 *
 * This source file is free software, available under the following license:
 * MIT license - https://en.wikipedia.org/wiki/MIT_License . Basically that
 * means you are free to use WOOF SD Interactive Element as long as this header is left intact.
 */
'use strict';
//12-04-2022
class WOOF_SD_IE {
    constructor(data, container, type = 'checkbox', classes = 'woof-sd-ie-checkbox') {
        this.data = data;
        this.container = container;
        this.type = type;
        this.classes = classes;
        this.selected = Boolean(this.data.selected);
        this.draw();
    }

    draw() {
        /*
         <div class="woof-sd-ie woof-sd-ie-checkbox woof-sd-ie-checkbox2">
         <input type="checkbox" name="role1" id="role01" checked onclick="console.log(this.checked)" />
         <label for="role01">
         <span></span>
         </label>
         <span class="woof-sd-ie-count">9</span>
         </div>
         */

        this.item = document.createElement('div');
        this.item.className = 'woof-sd-ie ' + this.classes;

        this.input = document.createElement('input');
        this.input.setAttribute('type', this.type);
        this.input.setAttribute('name', this.data.name);
        let id = 'ie-' + (Math.random() + 1).toString(36).substring(7);
        this.input.setAttribute('id', id);
        if (this.selected) {
            this.input.checked = true;
        }

        this.input.addEventListener('click', e => {
            this.onSelect();
        });

        this.label = document.createElement('label');
        this.label.className == 'woof-sd-label';
        this.label.setAttribute('for', id);

        this.span1 = document.createElement('span');
        this.span2 = document.createElement('span');
        this.span1.appendChild(this.span2);
        this.label.appendChild(this.span1);

        this.counter = document.createElement('span');
        this.counter.className = 'woof-sd-ie-count';
        this.counter.innerText = this.data.count;

        //+++

        this.item.appendChild(this.input);
        this.item.appendChild(this.label);
        this.item.appendChild(this.counter);
        this.container.appendChild(this.item);
    }

    onSelect() {
        console.log('here 23', this.input.checked);
    }
}

