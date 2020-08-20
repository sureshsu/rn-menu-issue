package com.awesomeproject;

import android.util.Log;
import android.view.KeyEvent;

import com.facebook.react.ReactActivity;
import com.github.kevinejohn.keyevent.KeyEventModule;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "AwesomeProject";
  }

  @Override
  public boolean onKeyDown(int keyCode, KeyEvent event) {
    Log.d("onKeyDown", "onKeyDown: " + keyCode);
    KeyEventModule.getInstance().onKeyDownEvent(keyCode, event);
    return super.onKeyDown(keyCode, event);
  }

  @Override
  public boolean onKeyUp(int keyCode, KeyEvent event) {
    Log.i("onKeyUp", "onKeyUp: " + keyCode);
    KeyEventModule.getInstance().onKeyUpEvent(keyCode, event);
    return super.onKeyUp(keyCode, event);
  }

  @Override
  public boolean onKeyLongPress(int keyCode, KeyEvent event) {
    Log.d("onKeyLongPress", "onKeyLongPress: " + keyCode);
    return super.onKeyLongPress(keyCode, event);
  }

  @Override
  public boolean onKeyMultiple(int keyCode, int repeatCount, KeyEvent event) {
    Log.d("onKeyMultiple", "onKeyMultiple: " + keyCode);
    KeyEventModule.getInstance().onKeyMultipleEvent(keyCode, repeatCount, event);
    return super.onKeyMultiple(keyCode, repeatCount, event);
  }
}
