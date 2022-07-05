try {
  (() => {
  
var __$$app$$__ = __$$hmAppManager$$__.currentApp;

  /*
* huamiOS bundle tool v1.0.17
* Copyright © Huami. All Rights Reserved
*/
'use strict';

try {
  __$$hmAppManager$$__.currentApp.app = DeviceRuntimeCore.App(
      {
          globalData: {},
          onCreate(e) { },
          onShow(e) { },
          onHide(e) { },
          onDestory(e) { },
          onError(e) { },
          onPageNotFound(e) { },
          onUnhandledRejection(e) { }
      });
} catch (e) {
  console.log(e);
}
__$$app$$__.app.__globals__ = { lang: new DeviceRuntimeCore.HmUtils.Lang(DeviceRuntimeCore.HmUtils.getLanguage()), px: DeviceRuntimeCore.HmUtils.getPx(192) };
/*
* end js
*/

  })()
} catch(e) {
  console.log(e)
  /* todo */
}