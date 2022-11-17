"version": 1,
  "author": "Sangamitra",
  "editor": "wokwi",
  "parts": [
    { "type": "wokwi-esp32-devkit-v1", "id": "esp", "top": -52.53, "left": -221.51, "attrs": {} },
    { "type": "wokwi-hc-sr04", "id": "ultrasonic1", "top": -258.33, "left": -101.14, "attrs": {} },
    { "type": "wokwi-hc-sr04", "id": "ultrasonic2", "top": -219.03, "left": 233.17, "attrs": {} },
    { "type": "wokwi-servo", "id": "servo1", "top": 273.86, "left": -198.32, "attrs": {} },
    {
      "type": "wokwi-lcd1602",
      "id": "lcd1",
      "top": 209.07,
      "left": 123.3,
      "attrs": { "pins": "i2c" }
    }
  ],
  "connections": [
    [ "esp:TX0", "$serialMonitor:RX", "", [] ],
    [ "esp:RX0", "$serialMonitor:TX", "", [] ],
    [ "ultrasonic1:ECHO", "esp:D2", "green", [ "v240.96", "h-105.66" ] ],
    [ "ultrasonic1:TRIG", "esp:D4", "green", [ "v232.87", "h-100.08" ] ],
    [ "esp:VIN", "lcd1:VCC", "red", [ "h-95.93", "v295.1", "h401.45", "v-144.61" ] ],
    [ "esp:3V3", "servo1:V+", "green", [ "v3.55", "h48.41", "v164.28", "h-149.24", "v10.41" ] ],
    [ "esp:GND.2", "servo1:GND", "black", [ "h-45.03", "v1.48" ] ],
    [
      "ultrasonic1:VCC",
      "esp:VIN",
      "red",
      [ "v83.62", "h-209.04", "v183.95", "h-1.16", "v-1.16" ]
    ],
    [ "esp:D13", "servo1:PWM", "green", [ "h-77.42", "v1.73" ] ],
    [ "esp:D27", "ultrasonic2:TRIG", "green", [ "h-92.46", "v-154.68", "h620.11" ] ],
    [
      "esp:D26",
      "ultrasonic2:ECHO",
      "green",
      [ "h-49.66", "v-162.23", "h509.04", "v49.75", "h70.57" ]
    ],
    [ "esp:D15", "esp:GND.1", "green", [ "h0" ] ],
    [ "ultrasonic1:GND", "esp:D15", "black", [ "v0" ] ],
    [ "esp:GND.1", "lcd1:GND", "black", [ "h-2.5", "v153.04" ] ],
    [ "esp:D22", "lcd1:SCL", "green", [ "h231.2", "v310.85" ] ],
    [ "esp:D21", "lcd1:SDA", "green", [ "h184.92", "v254.18" ] ],
    [ "ultrasonic2:VCC", "servo1:V+", "red", [ "v295.37", "h-376.75" ] ],
    [
      "ultrasonic2:GND",
      "lcd1:GND",
      "black",
      [ "v206.29", "h-451.33", "v124.95", "h226.76", "v30.08" ]
    ]
  ]
}