prompt1 = 'what is theta in degrees?';
theta = input(prompt1)
prompt2 = 'what is initial velocity in m/s?';
v0 = input(prompt2)
prompt3 = 'what is initial high in m?';
h = input(prompt3)
prompt4 = 'what is the x coordinate of the target in m?';
xt = input(prompt4)
prompt5 = 'what is the y coordinate of the target in m?';
yt = input5(prompt5)

%a = -9.81;

%tland= (-v0*sind(theta)-sqrt((v0*sind(theta))^2-2*h*a))/a

%t = linspace(0,tland,50);


%x = v0*cosd(theta)*t;
%y = 0.5*a*t.^2 + v0*sind(theta)*t + h;
%hold off
%plot(x,y)
%hold on
%plot(xt,yt)


%fprintf('The time to land is %f\n; tland)
