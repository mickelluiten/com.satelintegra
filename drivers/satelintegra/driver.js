/* eslint-disable no-unused-vars */
/* eslint-disable max-len */

'use strict';

const Homey = require('homey');
const { ManagerSettings } = require('homey');
const { ManagerDrivers } = require('homey');
const functions = require('../../functions/functions');

class integraAlarmDriver extends Homey.Driver {

  /**
   * onInit is called when the driver is initialized.
   */
  async onInit() {
    this.log('integraAlarmDriver has been initialized');
  }

  /**
   * onPairListDevices is called when a user is adding a device and the 'list_devices' view is called.
   * This should return an array with the data of devices that are available for pairing.
   */
  async onPairListDevices() {
    return [
      // Example device data, note that `store` is optional
      // {
      //   name: 'My Device',
      //   data: {
      //     id: 'my-device',
      //   },
      //   store: {
      //     address: '127.0.0.1',
      //   },
      // },
    ];
  }

}

module.exports = integraAlarmDriver;
