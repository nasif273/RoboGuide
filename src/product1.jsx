import './product1.css'; // Import CSS file for styling

function Product1() {
  return (
    <div className="product1">
      <h2 className="product1__title">4WD Omni-directional Mecanum Wheels Robotic Car Kit</h2>
      <p className="product1__description">
        Hello and welcome back! In this project, we are excited to introduce you to the 4WD Omni-directional Mecanum Wheels Robotic Car Kit provided by Adeept. I have had the pleasure of using this smart car for several days, and I must say it has been quite an enjoyable experience.
      </p>
      <p className="product1__description">
        The primary purpose of this smart car is to serve as a platform for teenagers to learn coding, building, and programming skills. It offers a great opportunity to delve into the world of robotics and acquire knowledge of Python programming language, as it is primarily based on the Raspberry Pi Pico board. Python is widely regarded as the most suitable language for beginners due to its simplicity and versatility.
      </p>
      <p className="product1__description">
        I have explored this car’s capabilities in various ways, which include obstacle avoidance, line tracking, IR remote control, and WIFI control to maintain distance. However, the beauty of this kit lies in its flexibility, allowing you to customize its functions according to your preferences. The standout feature of this smart car, in my opinion, is the mecanum wheels that enable it to perform Left/Right Parallel Shift, Forward/Backward, Upper Left/Right Diagonal Shift, and Lower Right/Left Diagonal Shift movements. It truly adds an element of fascination to the overall experience. Also, we can see the RGB pixel LED, buzzer, and LCD screen on the main PCB. You can use these components as you like.
      </p>
      <p>Components</p>
      <ul>
  <li>1x Raspberry Pi Pico</li>
  <li>1x Pico Robot Expansion Board</li>
  <li>1x I2C LCD1602 Display</li>
  <li>1x Ultrasonic Module</li>
  <li>1x 3CH Line Tracking Module</li>
  <li>1x ESP8266(ESP-01) Module</li>
  <li>1x IR Remote Control</li>
  <li>4x TT Motor</li>
  <li>4x Mecanum Wheel(2R + 2L)</li>
  <li>1x Servo Motor</li>
  <li>1x Battery Holder</li>
  <li>1x Micro USB Cable</li>
</ul><br></br>
<br></br>



      CODE<br></br> <br />
      <div>
  <pre>
    <code>
    1. from pico_car import Motor,IR, I2cLcd, Servo <br></br>
2. from machine import I2C, Pin <br></br>
3. from ws2812 import WS2812 <br></br>
4. import time <br></br>
5. import array <br></br>
6. import avoid_obstacles <br></br>
7. import line_tracking <br></br>
8. import keep_distance <br></br>
9. <br></br>
10. RGB_LED = WS2812() <br></br>
11. servo = Servo() <br></br>
12. motor = Motor() <br></br>
13. PIN = 22; <br></br>
14. irm = IR(PIN) <br></br>
15. <br></br>
16. DEFAULT_I2C_ADDR = 0x27 <br></br>
17. i2c = I2C(0,sda=Pin(20),scl=Pin(21),freq=400000) <br></br>
18. lcd = I2cLcd(i2c, DEFAULT_I2C_ADDR, 2, 16) <br></br>
19. <br></br>
20. info = '' <br></br>
21. lcd_print = '' <br></br>
22. lcd_print2 = '' <br></br>
23. speed = 30 <br></br>
24. # Infrared reception interval time. <br></br>
25. IR_delay_time = 0.11 <br></br>
26. <br></br>
27. mark = 1 <br></br>
28. mark_ir = '' <br></br>
29. <br></br>
30. def IR_control(): <br></br>
31.     global info, lcd_print, mark_ir, mark <br></br>
32.     IR_re = irm.scan() <br></br>
33.     if IR_re != mark_ir: <br></br>
34.         print(IR_re) <br></br>
35.         mark_ir = IR_re <br></br>
36.     if(IR_re[0]==False): <br></br>
37.         #print("_____________") <br></br>
38.         mark = 1 <br></br>
39.     if(IR_re[0]==True and IR_re[1]!=None): <br></br>
40.         # remove the first possibly wrong command. <br></br>
41.         # 删除第一个可能错误的指令 <br></br>
42.         if IR_re[0] != None and mark!= -999: <br></br>
43.             mark = -999 <br></br>
44.             <br></br>
45.         elif IR_re[1] == "*": <br></br>
46.             try: <br></br>
47.                 while True: <br></br>
48.                     avoid_obstacles.test() <br></br>
49. #                     RGB_LED.breath(0,0,255) <br></br>
50.                     IR_re = irm.scan() <br></br>
51.                     if IR_re[1] == "ok": <br></br>
52.                         RGB_LED.black() <br></br>
53.                         servo.set_angle(7, 0) <br></br>
54.                         break <br></br>
55.             except KeyboardInterrupt: <br></br>
56.                 motor.motor_stop() <br></br>
57.         elif IR_re[1] == "0": <br></br>
58.             try: <br></br>
59.                 while True: <br></br>
60.                     line_tracking.line_track() <br></br>
61.                     IR_re = irm.scan() <br></br>
62.                     if  IR_re[1] == "ok": <br></br>
63.                         RGB_LED.black() <br></br>
64.                         break <br></br>
65.             except KeyboardInterrupt: <br></br>
66.                 motor.motor_stop() <br></br>
67.                 <br></br>
68.         elif IR_re[1] == "#": <br></br>
69.             try: <br></br>
70.                 servo.set_angle(7, 0) <br></br>
71.                  <br></br>
72.                 while True: <br></br>
73.                     keep_distance.keep_distance() <br></br>
74.                     IR_re = irm.scan() <br></br>
75.                     if  IR_re[1] == "ok": <br></br>
76.                         RGB_LED.black() <br></br>
77.                         break <br></br>
78.             except KeyboardInterrupt: <br></br>
79.                 motor.motor_stop() <br></br>
80.              <br></br>
81.             <br></br>
82.         else: <br></br>
83.             if IR_re[1] == "up": <br></br>
84.                 motor.move(1, "forward", speed) <br></br>
85.                 lcd_print = "Forward" <br></br>
86.                 RGB_LED.red() <br></br>
87.             elif IR_re[1] == "down": <br></br>
88.                 motor.move(1, "backward", speed) <br></br>
89.                 lcd_print = "Backward" <br></br>
90.                 RGB_LED.yellow() <br></br>
91.             elif IR_re[1] == "left": <br></br>
92.                 motor.move(1, "left", speed) <br></br>
93.                 lcd_print = "Left" <br></br>
94.                 RGB_LED.blue() <br></br>
95.             elif IR_re[1] == "right": <br></br>
96.                 motor.move(1, "right", speed) <br></br>
97.                 lcd_print = "Right" <br></br>
98.                 RGB_LED.green() <br></br>
99.             elif IR_re[1] == "1": <br></br>
100.                 motor.move(1, "left_forward", speed) <br></br>
101.                 lcd_print = "Left Forward" <br></br>
102.             elif IR_re[1] == "3": <br></br>
103.                 motor.move(1, "right_forward", speed) <br></br>
104.                 lcd_print = "Right Forward" <br></br>
105.             elif IR_re[1] == "7": <br></br>
106.                 motor.move(1, "left_backward", speed) <br></br>
107.                 lcd_print = "Left Backward" <br></br>
108.             elif IR_re[1] == "9": <br></br>

  </code>
  </pre>
</div>
<br></br>

    </div>
  );
}

export default Product1;
