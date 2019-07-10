SET NAMES UTF8;
DROP DATABASE IF EXISTS xm;
CREATE DATABASE xm CHARSET=UTF8;
USE xm;


/**用户信息**/
CREATE TABLE xm_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  city  VARCHAR(8),
	birthday DATE,
  avatar VARCHAR(128),        #头像图片路径
  signatrue  VARCHAR(32),     #个性签名
  gender boolean                  #性别  0-女  1-男
);

