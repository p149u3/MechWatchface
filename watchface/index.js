try {
  (() => {
    let APP = __$$hmAppManager$$__.currentApp;
    let CURRENT_APP = APP.current,
      { px: i } =
        (new DeviceRuntimeCore.WidgetFactory(
          new DeviceRuntimeCore.HmDomApi(APP, CURRENT_APP)
        ),
          APP.app.__globals__);
    class Screen {
      static MAIN = 'main';
      constructor() {
        this.widgets = [];
      }
      setVisible(visible) {
        this.widgets.forEach(widget => widget.setProperty(hmUI.prop.VISIBLE, visible));
      }
      add(widget) {
        this.widgets.push(widget);
      }
      createWidget(type, config) {
        let widget = hmUI.createWidget(type, config);
        this.add(widget);
        return widget;
      }
    }
    class ScreenManager {
      tm = null;
      constructor() {
        this.screens = {};
      };
      getScreen(nm) {
        if (!this.screens[nm]) {
          this.screens[nm] = new Screen;
        }
        return this.screens[nm];
      };
      switch(nm) {
        if (this.screens[nm]) {
          for (const [name, screen] of Object.entries(this.screens)) {
            screen.setVisible(name === nm);
          }
          this.clearScreenTimer();
          if (nm != Screen.MAIN) {
            this.setScreenTimer(4000);
          }
        }
      };
      back() {
        console.log('back');
        this.switch(Screen.MAIN);
      };
      setScreenTimer(time) {
        this.tm = timer.createTimer(
          time,
          1000,
          this.back.bind(this),
          null
        )
      };
      clearScreenTimer() {
        if (this.tm) {
          timer.stopTimer(this.tm);
          this.tm = null;
        }
      };
    }

    try {
      (() => {
        let APP = __$$hmAppManager$$__.currentApp;
        let CURRENT_APP = APP.current;
        new DeviceRuntimeCore.WidgetFactory(new DeviceRuntimeCore.HmDomApi(APP, CURRENT_APP), "drink");
        console.log("-----\x3e>>current");
        console.log(__$$hmAppManager$$__.currentApp.pid);
        console.log(__$$hmAppManager$$__.currentApp.current);
        let weekdays = [];
        let voidAMPM = [];
        for (let i = 1; i < 8; i++) {
          weekdays.push(`images/week/en/${i}.png`);
          voidAMPM.push("images/ampm/24sh/dot.png");
        }
        let DATA_FONT = [];
        let DATA_RED_FONT = [];
        let TIME_FONT = [];
        let BATTERY_FONT = [];
        for (let i = 0; i < 10; i++) {
          DATA_FONT.push(`images/data/${i}.png`);
          DATA_RED_FONT.push(`images/data_red/${i}.png`);
          TIME_FONT.push(`images/time/${i}.png`);
          BATTERY_FONT.push(`images/battery/${i}.png`);
        }
        let segSteps = [];
        for (let i = 1; i < 17; i++) {
          segSteps.push(`images/pb/${i}.png`);
        }
        let weatherIcons = [];
        for (let i = 0; i < 29; i++) {
          weatherIcons.push(`images/weather/${i}.png`);
        }
        const BACKGROUND = {
          x: 0,
          y: 0,
          src: "images/bg/am.png",
          show_level: hmUI.show_level.ONLY_NORMAL
        };
        const WEATHER_BACK = {
          x: 4,
          y: 48,
          src: "images/icon/red.png",
          show_level: hmUI.show_level.ONLY_NORMAL
        };
        const WEATHER_TOUCH = {
          ...WEATHER_BACK,
          enable: true,
          alpha: 0
        };
        const PULSE_BACK = {
          x: 96,
          y: 48,
          src: "images/icon/cog.png",
          show_level: hmUI.show_level.ONLY_NORMAL
        };
        const PULSE_TOUCH = {
          ...PULSE_BACK,
          enable: true,
          alpha: 0
        };
        const AM_BACK = {
          x: 6,
          y: 235,
          src: "images/icon/am.png",
          show_level: hmUI.show_level.ONLY_NORMAL

        };
        const AM_TOUCH = {
          ...AM_BACK,
          enable: true,
          alpha: 0
        };
        const BLUETOOTH_OFF = {
          x: 111,
          y: 16,
          show_level: hmUI.show_level.ONLY_NORMAL,
          src: "images/status/bluetoothoff.png"
        };
        const BLUETOOTH_ON = {
          x: 111,
          y: 16,
          show_level: hmUI.show_level.ONLY_NORMAL,
          src: "images/status/bluetoothon.png",
          type: hmUI.system_status.DISCONNECT
        };
        const DND_OFF = {
          x: 55,
          y: 16,
          show_level: hmUI.show_level.ONLY_NORMAL,
          src: "images/status/disturboff.png"
        };
        const DND_ON = {
          x: 55,
          y: 16,
          show_level: hmUI.show_level.ONLY_NORMAL,
          src: "images/status/disturbon.png",
          type: hmUI.system_status.DISTURB
        };
        const BATTERY_ICON = {
          x: 4,
          y: 386,
          src: "images/baticonred.png",
          show_level: hmUI.show_level.ONLY_NORMAL
        };
        const BATTERY_PERCENT = {
          x: 90,
          y: 393,
          w: 100,
          type: hmUI.data_type.BATTERY,
          font_array: BATTERY_FONT,
          align_h: hmUI.align.RIGHT,
          unit_sc: "images/battery/percent.png",
          unit_tc: "images/battery/percent.png",
          unit_en: "images/battery/percent.png",
          show_level: hmUI.show_level.ONLY_NORMAL
        };
        const TEMPERATURE = {
          x: -1,
          y: 102,
          w: 100,
          type: hmUI.data_type.WEATHER_CURRENT,
          font_array: DATA_FONT,
          align_h: hmUI.align.CENTER_H,
          unit_sc: "images/data/degree.png",
          unit_tc: "images/data/degree.png",
          unit_en: "images/data/degree.png",
          negative_image: "images/data/minus.png",
          invalid_image: "images/data/none.png",
          show_level: hmUI.show_level.ONLY_NORMAL
        };
        const PULSE = {
          x: 92,
          y: 102,
          w: 100,
          type: hmUI.data_type.HEART,
          font_array: DATA_FONT,
          align_h: hmUI.align.CENTER_H,
          invalid_image: "images/data/none.png",
          show_level: hmUI.show_level.ONLY_NORMAL
        };
        const STEPS = {
          x: 46,
          y: 430,
          w: 100,
          type: hmUI.data_type.STEP,
          font_array: DATA_RED_FONT,
          align_h: hmUI.align.CENTER_H,
          invalid_image: "images/data/none.png",
          show_level: hmUI.show_level.ONLY_NORMAL
        };
        let SEG_STEPS = {
          x: 6,
          y: 235,
          image_array: segSteps,
          image_length: 16,
          type: hmUI.data_type.STEP,
          show_level: hmUI.show_level.ONLY_NORMAL
        }
        const WEATHER = {
          x: 29,
          y: 55,
          image_array: weatherIcons,
          image_length: weatherIcons.length,
          type: hmUI.data_type.WEATHER_CURRENT,
          show_level: hmUI.show_level.ONLY_NORMAL,
          show_level: hmUI.show_level.ONLY_NORMAL
        };
        const BATTERY_ARC_BG = {
          center_x: 96,
          center_y: 389,
          radius: 84,
          start_angle: -105,
          end_angle: -255,
          line_width: 16,
          corner_flag: 3,
          show_level: hmUI.show_level.ONLY_NORMAL,
          color: 3543563,
          level: 100
        };
        let BATTERY_ARC_PROGRESS = {
          center_x: 96,
          center_y: 389,
          radius: 84,
          start_angle: -105,
          end_angle: -255,
          line_width: 16,
          corner_flag: 3,
          show_level: hmUI.show_level.ONLY_NORMAL,
          color: 10096917,
          type: hmUI.data_type.BATTERY
        };
        let TIME_TEXT = {
          hour_zero: true,
          hour_startX: 8,
          hour_startY: 170,
          hour_array: TIME_FONT,
          hour_align: hmUI.align.LEFT,
          minute_zero: true,
          minute_startX: 112,
          minute_startY: 170,
          minute_array: TIME_FONT,
          minute_align: hmUI.align.LEFT,
          show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_AOD
        };
        let AM_PM = {
          am_x: 82,
          am_y: 174,
          am_sc_path: "images/ampm/12sh/amen.png",
          am_en_path: "images/ampm/12sh/amen.png",
          pm_x: 82,
          pm_y: 210,
          pm_sc_path: "images/ampm/12sh/pmen.png",
          pm_en_path: "images/ampm/12sh/pmen.png",
          show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_AOD
        };
        const AM_24 = {
          x: 82,
          y: 172,
          week_en: voidAMPM,
          week_sc: voidAMPM,
          week_tc: voidAMPM,
          show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_AOD
        };
        const PM_24 = {
          x: 82,
          y: 205,
          week_en: voidAMPM,
          week_sc: voidAMPM,
          week_tc: voidAMPM,
          show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_AOD
        };
        const WEEKDAY = {
          x: 32,
          y: 144,
          week_en: weekdays,
          week_sc: weekdays,
          week_tc: weekdays,
          show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_AOD
        };
        let DATE = {
          month_startX: 88,
          month_startY: 144,
          month_zero: true,
          month_en_array: DATA_RED_FONT,
          month_sc_array: DATA_RED_FONT,
          month_tc_array: DATA_RED_FONT,
          month_unit_sc: "images/data_red/slash.png",
          month_unit_tc: "images/data_red/slash.png",
          month_unit_en: "images/data_red/slash.png",
          month_space: 1,
          day_follow: true,
          day_zero: true,
          day_space: 1,
          day_en_array: DATA_RED_FONT,
          day_sc_array: DATA_RED_FONT,
          day_tc_array: DATA_RED_FONT,
          show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_AOD
        };
        let SCREEN2_BG = {
          x: 0,
          y: 0,
          w: 192,
          h: 490,
          color: 0x000000
        };
        let SCREEN2_BACK_BACK = {
          x: 0,
          y: 395,
          src: "images/second/2back.png",
          show_level: hmUI.show_level.ONLY_NORMAL
        };
        let SCREEN2_FLASH_BACK = {
          x: 0,
          y: 0,
          src: "images/second/2flash.png",
          show_level: hmUI.show_level.ONLY_NORMAL
        };
        let SCREEN2_PAI_BACK = {
          x: 0,
          y: 121,
          src: "images/second/2pai.png",
          show_level: hmUI.show_level.ONLY_NORMAL
        };
        const SCREEN2_PAI_TOUCH = {
          ...SCREEN2_PAI_BACK,
          enable: true,
          alpha: 0
        };
        const SCREEN2_PAI_TEXT = {
          x: 0,
          y: 186,
          w: 96,
          type: hmUI.data_type.PAI_WEEKLY,
          font_array: DATA_FONT,
          align_h: hmUI.align.CENTER_H,
          invalid_image: "images/data/none.png",
          show_level: hmUI.show_level.ONLY_NORMAL
        };
        const SCREEN2_PAI_DAY_TEXT = {
          x: 0,
          y: 231,
          w: 96,
          type: hmUI.data_type.PAI_DAILY,
          font_array: DATA_FONT,
          align_h: hmUI.align.CENTER_H,
          invalid_image: "images/data/none.png",
          show_level: hmUI.show_level.ONLY_NORMAL
        };
        let SCREEN2_TIMER_BACK = {
          x: 97,
          y: 121,
          src: "images/second/2timer.png",
          show_level: hmUI.show_level.ONLY_NORMAL
        };
        const SCREEN2_TIMER_TOUCH = {
          ...SCREEN2_TIMER_BACK,
          enable: true,
          alpha: 0
        };
        let SCREEN2_DIST_BACK = {
          x: 0,
          y: 263,
          src: "images/second/2dist.png",
          show_level: hmUI.show_level.ONLY_NORMAL,
          enable: true
        };
        const SCREEN2_DIST_TOUCH = {
          ...SCREEN2_DIST_BACK,
          enable: true,
          alpha: 0
        };
        const SCREEN2_DIST_TEXT = {
          x: 54,
          y: 352,
          w: 90,
          type: hmUI.data_type.DISTANCE,
          font_array: DATA_FONT,
          align_h: hmUI.align.CENTER_H,
          invalid_image: "images/data/none.png",
          unit_en: "images/data/km.png",
          unit_sc: "images/data/km.png",
          unit_tc: "images/data/km.png",
          dot_image: "images/data/dot.png",
          show_level: hmUI.show_level.ONLY_NORMAL
        };
        DeviceRuntimeCore.HmLogger.getLogger("defult");
        CURRENT_APP.module = DeviceRuntimeCore.WatchFace(
          {
            init_view() {
              let sm = new ScreenManager();
              let screen1 = sm.getScreen('main');
              screen1.createWidget(hmUI.widget.IMG, BACKGROUND);
              screen1.createWidget(hmUI.widget.IMG, BLUETOOTH_OFF);
              screen1.createWidget(hmUI.widget.IMG, DND_OFF);
              screen1.createWidget(hmUI.widget.IMG, BATTERY_ICON);
              screen1.createWidget(hmUI.widget.IMG, WEATHER_BACK);
              screen1.createWidget(hmUI.widget.IMG, PULSE_BACK);
              screen1.createWidget(hmUI.widget.IMG, AM_BACK);
              screen1.createWidget(hmUI.widget.IMG_WEEK, AM_24);
              screen1.createWidget(hmUI.widget.IMG_WEEK, PM_24);
              screen1.createWidget(hmUI.widget.IMG_WEEK, WEEKDAY);
              screen1.createWidget(hmUI.widget.IMG_LEVEL, WEATHER);
              screen1.createWidget(hmUI.widget.IMG_TIME, TIME_TEXT);
              screen1.createWidget(hmUI.widget.TEXT_IMG, BATTERY_PERCENT);
              screen1.createWidget(hmUI.widget.TEXT_IMG, TEMPERATURE);
              screen1.createWidget(hmUI.widget.TEXT_IMG, PULSE);
              screen1.createWidget(hmUI.widget.TEXT_IMG, STEPS);
              screen1.createWidget(hmUI.widget.IMG_LEVEL, SEG_STEPS);
              screen1.createWidget(hmUI.widget.IMG_DATE, DATE);
              screen1.createWidget(hmUI.widget.ARC_PROGRESS, BATTERY_ARC_BG);
              screen1.createWidget(hmUI.widget.ARC_PROGRESS, BATTERY_ARC_PROGRESS);
              screen1.createWidget(hmUI.widget.IMG_STATUS, BLUETOOTH_ON);
              screen1.createWidget(hmUI.widget.IMG_STATUS, DND_ON);
              screen1.createWidget(hmUI.widget.IMG, PULSE_TOUCH)
                .addEventListener(hmUI.event.CLICK_UP, function (e) {
                  hmApp.startApp({
                    url: "StressHomeScreen",
                    native: true,
                  });
                });
              screen1.createWidget(hmUI.widget.IMG, WEATHER_TOUCH)
                .addEventListener(hmUI.event.CLICK_UP, function (e) {
                  hmApp.startApp({
                    url: "WeatherScreen",
                    native: true,
                  });
                });
              screen1.createWidget(hmUI.widget.IMG, AM_TOUCH)
                .addEventListener(hmUI.event.CLICK_UP, function (e) {
                  sm.switch('menu');
                });

              let screen2 = sm.getScreen('menu');
              screen2.createWidget(hmUI.widget.FILL_RECT, SCREEN2_BG);
              screen2.createWidget(hmUI.widget.IMG, SCREEN2_PAI_BACK);
              screen2.createWidget(hmUI.widget.IMG, SCREEN2_DIST_BACK);
              screen2.createWidget(hmUI.widget.TEXT_IMG, SCREEN2_PAI_TEXT);
              screen2.createWidget(hmUI.widget.TEXT_IMG, SCREEN2_PAI_DAY_TEXT);
              screen2.createWidget(hmUI.widget.TEXT_IMG, SCREEN2_DIST_TEXT);
              screen2.createWidget(hmUI.widget.IMG, SCREEN2_PAI_TOUCH)
                .addEventListener(hmUI.event.CLICK_UP, function (e) {
                  hmApp.startApp({
                    url: "pai_app_Screen",
                    native: true,
                  });
                });
              screen2.createWidget(hmUI.widget.IMG, SCREEN2_TIMER_BACK)
                .addEventListener(hmUI.event.CLICK_UP, function (e) {
                  hmApp.startApp({
                    url: "CountdownAppScreen",
                    native: true,
                  });
                });
              screen2.createWidget(hmUI.widget.IMG, SCREEN2_DIST_TOUCH)
                .addEventListener(hmUI.event.CLICK_UP, function (e) {
                  hmApp.startApp({
                    url: "SportListScreen",
                    native: true,
                  });
                });
              screen2.createWidget(hmUI.widget.IMG, SCREEN2_FLASH_BACK)
                .addEventListener(hmUI.event.CLICK_UP, function (e) {
                  hmApp.startApp({
                    url: "FlashLightScreen",
                    native: true,
                  });
                });
              screen2.createWidget(hmUI.widget.IMG, SCREEN2_BACK_BACK)
                .addEventListener(hmUI.event.CLICK_UP, function (e) {
                  sm.switch('main');
                });
              sm.switch('main');
              hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
                resume_call: (function () {
                }),
                pause_call: (function () {
                  sm.switch('main');
                }),
              });
            },
            onInit() {
              console.log("index page.js on init invoke"),
                this.init_view()
            },
            onReady() {
              console.log("index page.js on ready invoke")
            },
            onShow() {
              console.log("index page.js on show invoke")
            },
            onHide() {
              console.log("index page.js on hide invoke")
            },
            onDestory() {
              console.log("index page.js on destory invoke")
            }
          })
      })()
    } catch (e) { console.log(e) }
  })()
} catch (e) { console.log(e) }