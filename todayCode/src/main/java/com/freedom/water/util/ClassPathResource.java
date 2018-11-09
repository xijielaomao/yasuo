package com.freedom.water.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * @Author: biyue
 * @Description:
 * @Date: 2018/11/3 21:38
 */
public class ClassPathResource {

    public static boolean isMobileNO(String mobiles){

        Pattern p = Pattern.compile("^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\\d{8}$");

        Matcher m = p.matcher(mobiles);

        System.out.println(m.matches()+"---");

        return m.matches();

    }

    public static boolean isName(String mobiles){

        Pattern p = Pattern.compile("[\\u4e00-\\u9fa5_a-zA-Z_]{2,4}");

        Matcher m = p.matcher(mobiles);

        System.out.println(m.matches()+"---");

        return m.matches();

    }


}
