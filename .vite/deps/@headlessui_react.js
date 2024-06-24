import {
  require_react_dom
} from "./chunk-KB4VQC4Z.js";
import {
  require_react
} from "./chunk-PMYDY72F.js";
import {
  __toESM
} from "./chunk-ZS7NZCD4.js";

// node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
var import_react = __toESM(require_react(), 1);
var $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== "undefined" ? (0, import_react.default).useLayoutEffect : () => {
};

// node_modules/@react-aria/utils/dist/useEffectEvent.mjs
var import_react2 = __toESM(require_react(), 1);
function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
  const ref = (0, import_react2.useRef)(null);
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    ref.current = fn;
  }, [
    fn
  ]);
  return (0, import_react2.useCallback)((...args) => {
    const f21 = ref.current;
    return f21 === null || f21 === void 0 ? void 0 : f21(...args);
  }, []);
}

// node_modules/@react-aria/utils/dist/useValueEffect.mjs
var import_react3 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useId.mjs
var import_react5 = __toESM(require_react(), 1);

// node_modules/@react-aria/ssr/dist/SSRProvider.mjs
var import_react4 = __toESM(require_react(), 1);
var $b5e257d569688ac6$var$defaultContext = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
};
var $b5e257d569688ac6$var$SSRContext = (0, import_react4.default).createContext($b5e257d569688ac6$var$defaultContext);
var $b5e257d569688ac6$var$IsSSRContext = (0, import_react4.default).createContext(false);
var $b5e257d569688ac6$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $b5e257d569688ac6$var$componentIds = /* @__PURE__ */ new WeakMap();
function $b5e257d569688ac6$var$useCounter(isDisabled2 = false) {
  let ctx = (0, import_react4.useContext)($b5e257d569688ac6$var$SSRContext);
  let ref = (0, import_react4.useRef)(null);
  if (ref.current === null && !isDisabled2) {
    var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = (0, import_react4.default).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
    if (currentOwner) {
      let prevComponentValue = $b5e257d569688ac6$var$componentIds.get(currentOwner);
      if (prevComponentValue == null)
        $b5e257d569688ac6$var$componentIds.set(currentOwner, {
          id: ctx.current,
          state: currentOwner.memoizedState
        });
      else if (currentOwner.memoizedState !== prevComponentValue.state) {
        ctx.current = prevComponentValue.id;
        $b5e257d569688ac6$var$componentIds.delete(currentOwner);
      }
    }
    ref.current = ++ctx.current;
  }
  return ref.current;
}
function $b5e257d569688ac6$var$useLegacySSRSafeId(defaultId) {
  let ctx = (0, import_react4.useContext)($b5e257d569688ac6$var$SSRContext);
  if (ctx === $b5e257d569688ac6$var$defaultContext && !$b5e257d569688ac6$var$canUseDOM)
    console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let counter = $b5e257d569688ac6$var$useCounter(!!defaultId);
  let prefix = ctx === $b5e257d569688ac6$var$defaultContext && false ? "react-aria" : `react-aria${ctx.prefix}`;
  return defaultId || `${prefix}-${counter}`;
}
function $b5e257d569688ac6$var$useModernSSRSafeId(defaultId) {
  let id = (0, import_react4.default).useId();
  let [didSSR] = (0, import_react4.useState)($b5e257d569688ac6$export$535bd6ca7f90a273());
  let prefix = didSSR || false ? "react-aria" : `react-aria${$b5e257d569688ac6$var$defaultContext.prefix}`;
  return defaultId || `${prefix}-${id}`;
}
var $b5e257d569688ac6$export$619500959fc48b26 = typeof (0, import_react4.default)["useId"] === "function" ? $b5e257d569688ac6$var$useModernSSRSafeId : $b5e257d569688ac6$var$useLegacySSRSafeId;
function $b5e257d569688ac6$var$getSnapshot() {
  return false;
}
function $b5e257d569688ac6$var$getServerSnapshot() {
  return true;
}
function $b5e257d569688ac6$var$subscribe(onStoreChange) {
  return () => {
  };
}
function $b5e257d569688ac6$export$535bd6ca7f90a273() {
  if (typeof (0, import_react4.default)["useSyncExternalStore"] === "function")
    return (0, import_react4.default)["useSyncExternalStore"]($b5e257d569688ac6$var$subscribe, $b5e257d569688ac6$var$getSnapshot, $b5e257d569688ac6$var$getServerSnapshot);
  return (0, import_react4.useContext)($b5e257d569688ac6$var$IsSSRContext);
}

// node_modules/@react-aria/utils/dist/useId.mjs
var $bdb11010cef70236$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $bdb11010cef70236$var$idsUpdaterMap = /* @__PURE__ */ new Map();
function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
  if (idA === idB)
    return idA;
  let setIdA = $bdb11010cef70236$var$idsUpdaterMap.get(idA);
  if (setIdA) {
    setIdA(idB);
    return idB;
  }
  let setIdB = $bdb11010cef70236$var$idsUpdaterMap.get(idB);
  if (setIdB) {
    setIdB(idA);
    return idA;
  }
  return idB;
}

// node_modules/@react-aria/utils/dist/chain.mjs
function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
  return (...args) => {
    for (let callback of callbacks)
      if (typeof callback === "function")
        callback(...args);
  };
}

// node_modules/@react-aria/utils/dist/domHelpers.mjs
var $431fbd86ca7dc216$export$b204af158042fbac = (el) => {
  var _el_ownerDocument;
  return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
};
var $431fbd86ca7dc216$export$f21a1ffae260145a = (el) => {
  if (el && "window" in el && el.window === el)
    return el;
  const doc = $431fbd86ca7dc216$export$b204af158042fbac(el);
  return doc.defaultView || window;
};

// node_modules/clsx/dist/clsx.mjs
function r(e7) {
  var t15, f21, n14 = "";
  if ("string" == typeof e7 || "number" == typeof e7)
    n14 += e7;
  else if ("object" == typeof e7)
    if (Array.isArray(e7)) {
      var o17 = e7.length;
      for (t15 = 0; t15 < o17; t15++)
        e7[t15] && (f21 = r(e7[t15])) && (n14 && (n14 += " "), n14 += f21);
    } else
      for (f21 in e7)
        e7[f21] && (n14 && (n14 += " "), n14 += f21);
  return n14;
}
function clsx() {
  for (var e7, t15, f21 = 0, n14 = "", o17 = arguments.length; f21 < o17; f21++)
    (e7 = arguments[f21]) && (t15 = r(e7)) && (n14 && (n14 += " "), n14 += t15);
  return n14;
}
var clsx_default = clsx;

// node_modules/@react-aria/utils/dist/mergeProps.mjs
function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
  let result = {
    ...args[0]
  };
  for (let i11 = 1; i11 < args.length; i11++) {
    let props = args[i11];
    for (let key in props) {
      let a15 = result[key];
      let b7 = props[key];
      if (typeof a15 === "function" && typeof b7 === "function" && // This is a lot faster than a regex.
      key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= /* 'A' */
      65 && key.charCodeAt(2) <= /* 'Z' */
      90)
        result[key] = (0, $ff5963eb1fccf552$export$e08e3b67e392101e)(a15, b7);
      else if ((key === "className" || key === "UNSAFE_className") && typeof a15 === "string" && typeof b7 === "string")
        result[key] = (0, clsx_default)(a15, b7);
      else if (key === "id" && a15 && b7)
        result.id = (0, $bdb11010cef70236$export$cd8c9cb68f842629)(a15, b7);
      else
        result[key] = b7 !== void 0 ? b7 : a15;
    }
  }
  return result;
}

// node_modules/@react-aria/utils/dist/focusWithoutScrolling.mjs
function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
  if ($7215afc6de606d6b$var$supportsPreventScroll())
    element.focus({
      preventScroll: true
    });
  else {
    let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
    element.focus();
    $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
  }
}
var $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
  if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
    $7215afc6de606d6b$var$supportsPreventScrollCached = false;
    try {
      let focusElem = document.createElement("div");
      focusElem.focus({
        get preventScroll() {
          $7215afc6de606d6b$var$supportsPreventScrollCached = true;
          return true;
        }
      });
    } catch (e7) {
    }
  }
  return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
  let parent = element.parentNode;
  let scrollableElements = [];
  let rootScrollingElement = document.scrollingElement || document.documentElement;
  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth)
      scrollableElements.push({
        element: parent,
        scrollTop: parent.scrollTop,
        scrollLeft: parent.scrollLeft
      });
    parent = parent.parentNode;
  }
  if (rootScrollingElement instanceof HTMLElement)
    scrollableElements.push({
      element: rootScrollingElement,
      scrollTop: rootScrollingElement.scrollTop,
      scrollLeft: rootScrollingElement.scrollLeft
    });
  return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
  for (let { element, scrollTop, scrollLeft } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}

// node_modules/@react-aria/utils/dist/platform.mjs
function $c87311424ea30a05$var$testUserAgent(re2) {
  var _window_navigator_userAgentData;
  if (typeof window === "undefined" || window.navigator == null)
    return false;
  return ((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand) => re2.test(brand.brand))) || re2.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re2) {
  var _window_navigator_userAgentData;
  return typeof window !== "undefined" && window.navigator != null ? re2.test(((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$export$9ac100e40613ea10() {
  return $c87311424ea30a05$var$testPlatform(/^Mac/i);
}
function $c87311424ea30a05$export$186c6964ca17d99() {
  return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
}
function $c87311424ea30a05$export$7bef049ce92e4224() {
  return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
}
function $c87311424ea30a05$export$fedb369cb70207f1() {
  return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
}
function $c87311424ea30a05$export$78551043582a6a98() {
  return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
}
function $c87311424ea30a05$export$6446a186d09e379e() {
  return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
}
function $c87311424ea30a05$export$a11b0059900ceec8() {
  return $c87311424ea30a05$var$testUserAgent(/Android/i);
}
function $c87311424ea30a05$export$b7d78993b74f766d() {
  return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
}

// node_modules/@react-aria/utils/dist/openLink.mjs
var import_react6 = __toESM(require_react(), 1);
var $ea8dcbcb9ea1b556$var$RouterContext = (0, import_react6.createContext)({
  isNative: true,
  open: $ea8dcbcb9ea1b556$var$openSyntheticLink,
  useHref: (href) => href
});
function $ea8dcbcb9ea1b556$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
  var _window_event_type, _window_event;
  let { metaKey, ctrlKey, altKey, shiftKey } = modifiers;
  if ((0, $c87311424ea30a05$export$b7d78993b74f766d)() && ((_window_event = window.event) === null || _window_event === void 0 ? void 0 : (_window_event_type = _window_event.type) === null || _window_event_type === void 0 ? void 0 : _window_event_type.startsWith("key")) && target.target === "_blank") {
    if ((0, $c87311424ea30a05$export$9ac100e40613ea10)())
      metaKey = true;
    else
      ctrlKey = true;
  }
  let event = (0, $c87311424ea30a05$export$78551043582a6a98)() && (0, $c87311424ea30a05$export$9ac100e40613ea10)() && !(0, $c87311424ea30a05$export$7bef049ce92e4224)() && true ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey,
    ctrlKey,
    altKey,
    shiftKey
  }) : new MouseEvent("click", {
    metaKey,
    ctrlKey,
    altKey,
    shiftKey,
    bubbles: true,
    cancelable: true
  });
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = setOpening;
  (0, $7215afc6de606d6b$export$de79e2c695e052f3)(target);
  target.dispatchEvent(event);
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
}
$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
function $ea8dcbcb9ea1b556$var$getSyntheticLink(target, open) {
  if (target instanceof HTMLAnchorElement)
    open(target);
  else if (target.hasAttribute("data-href")) {
    let link = document.createElement("a");
    link.href = target.getAttribute("data-href");
    if (target.hasAttribute("data-target"))
      link.target = target.getAttribute("data-target");
    if (target.hasAttribute("data-rel"))
      link.rel = target.getAttribute("data-rel");
    if (target.hasAttribute("data-download"))
      link.download = target.getAttribute("data-download");
    if (target.hasAttribute("data-ping"))
      link.ping = target.getAttribute("data-ping");
    if (target.hasAttribute("data-referrer-policy"))
      link.referrerPolicy = target.getAttribute("data-referrer-policy");
    target.appendChild(link);
    open(link);
    target.removeChild(link);
  }
}
function $ea8dcbcb9ea1b556$var$openSyntheticLink(target, modifiers) {
  $ea8dcbcb9ea1b556$var$getSyntheticLink(target, (link) => $ea8dcbcb9ea1b556$export$95185d699e05d4d7(link, modifiers));
}

// node_modules/@react-aria/utils/dist/runAfterTransition.mjs
var $bbed8b41f857bcc0$var$transitionsByElement = /* @__PURE__ */ new Map();
var $bbed8b41f857bcc0$var$transitionCallbacks = /* @__PURE__ */ new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
  if (typeof window === "undefined")
    return;
  function isTransitionEvent(event) {
    return "propertyName" in event;
  }
  let onTransitionStart = (e7) => {
    if (!isTransitionEvent(e7) || !e7.target)
      return;
    let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e7.target);
    if (!transitions) {
      transitions = /* @__PURE__ */ new Set();
      $bbed8b41f857bcc0$var$transitionsByElement.set(e7.target, transitions);
      e7.target.addEventListener("transitioncancel", onTransitionEnd, {
        once: true
      });
    }
    transitions.add(e7.propertyName);
  };
  let onTransitionEnd = (e7) => {
    if (!isTransitionEvent(e7) || !e7.target)
      return;
    let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e7.target);
    if (!properties)
      return;
    properties.delete(e7.propertyName);
    if (properties.size === 0) {
      e7.target.removeEventListener("transitioncancel", onTransitionEnd);
      $bbed8b41f857bcc0$var$transitionsByElement.delete(e7.target);
    }
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
      for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks)
        cb();
      $bbed8b41f857bcc0$var$transitionCallbacks.clear();
    }
  };
  document.body.addEventListener("transitionrun", onTransitionStart);
  document.body.addEventListener("transitionend", onTransitionEnd);
}
if (typeof document !== "undefined") {
  if (document.readyState !== "loading")
    $bbed8b41f857bcc0$var$setupGlobalEvents();
  else
    document.addEventListener("DOMContentLoaded", $bbed8b41f857bcc0$var$setupGlobalEvents);
}
function $bbed8b41f857bcc0$export$24490316f764c430(fn) {
  requestAnimationFrame(() => {
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0)
      fn();
    else
      $bbed8b41f857bcc0$var$transitionCallbacks.add(fn);
  });
}

// node_modules/@react-aria/utils/dist/useDrag1D.mjs
var import_react7 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useGlobalListeners.mjs
var import_react8 = __toESM(require_react(), 1);
function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
  let globalListeners = (0, import_react8.useRef)(/* @__PURE__ */ new Map());
  let addGlobalListener = (0, import_react8.useCallback)((eventTarget, type, listener, options) => {
    let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args) => {
      globalListeners.current.delete(listener);
      listener(...args);
    } : listener;
    globalListeners.current.set(listener, {
      type,
      eventTarget,
      fn,
      options
    });
    eventTarget.addEventListener(type, listener, options);
  }, []);
  let removeGlobalListener = (0, import_react8.useCallback)((eventTarget, type, listener, options) => {
    var _globalListeners_current_get;
    let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
    eventTarget.removeEventListener(type, fn, options);
    globalListeners.current.delete(listener);
  }, []);
  let removeAllGlobalListeners = (0, import_react8.useCallback)(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [
    removeGlobalListener
  ]);
  (0, import_react8.useEffect)(() => {
    return removeAllGlobalListeners;
  }, [
    removeAllGlobalListeners
  ]);
  return {
    addGlobalListener,
    removeGlobalListener,
    removeAllGlobalListeners
  };
}

// node_modules/@react-aria/utils/dist/useObjectRef.mjs
var import_react9 = __toESM(require_react(), 1);
function $df56164dff5785e2$export$4338b53315abf666(forwardedRef) {
  const objRef = (0, import_react9.useRef)(null);
  return (0, import_react9.useMemo)(() => ({
    get current() {
      return objRef.current;
    },
    set current(value) {
      objRef.current = value;
      if (typeof forwardedRef === "function")
        forwardedRef(value);
      else if (forwardedRef)
        forwardedRef.current = value;
    }
  }), [
    forwardedRef
  ]);
}

// node_modules/@react-aria/utils/dist/useUpdateEffect.mjs
var import_react10 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useResizeObserver.mjs
var import_react11 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useSyncRef.mjs
function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref) {
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    if (context && context.ref && ref) {
      context.ref.current = ref.current;
      return () => {
        if (context.ref)
          context.ref.current = null;
      };
    }
  });
}

// node_modules/@react-aria/utils/dist/useViewportSize.mjs
var import_react12 = __toESM(require_react(), 1);
var $5df64b3807dc15ee$var$visualViewport = typeof document !== "undefined" && window.visualViewport;

// node_modules/@react-aria/utils/dist/useDescription.mjs
var import_react13 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useEvent.mjs
var import_react14 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/isVirtualEvent.mjs
function $6a7db85432448f7f$export$60278871457622de(event) {
  if (event.mozInputSource === 0 && event.isTrusted)
    return true;
  if ((0, $c87311424ea30a05$export$a11b0059900ceec8)() && event.pointerType)
    return event.type === "click" && event.buttons === 1;
  return event.detail === 0 && !event.pointerType;
}
function $6a7db85432448f7f$export$29bf1b5f2c56cf63(event) {
  return !(0, $c87311424ea30a05$export$a11b0059900ceec8)() && event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse";
}

// node_modules/@react-aria/utils/dist/useDeepMemo.mjs
var import_react15 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useFormReset.mjs
var import_react16 = __toESM(require_react(), 1);

// node_modules/@react-stately/utils/dist/useControlledState.mjs
var import_react17 = __toESM(require_react(), 1);

// node_modules/@react-aria/interactions/dist/textSelection.mjs
var $14c0b72509d70225$var$state = "default";
var $14c0b72509d70225$var$savedUserSelect = "";
var $14c0b72509d70225$var$modifiedElementMap = /* @__PURE__ */ new WeakMap();
function $14c0b72509d70225$export$16a4697467175487(target) {
  if ((0, $c87311424ea30a05$export$fedb369cb70207f1)()) {
    if ($14c0b72509d70225$var$state === "default") {
      const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(target);
      $14c0b72509d70225$var$savedUserSelect = documentObject.documentElement.style.webkitUserSelect;
      documentObject.documentElement.style.webkitUserSelect = "none";
    }
    $14c0b72509d70225$var$state = "disabled";
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    $14c0b72509d70225$var$modifiedElementMap.set(target, target.style.userSelect);
    target.style.userSelect = "none";
  }
}
function $14c0b72509d70225$export$b0d6fa1ab32e3295(target) {
  if ((0, $c87311424ea30a05$export$fedb369cb70207f1)()) {
    if ($14c0b72509d70225$var$state !== "disabled")
      return;
    $14c0b72509d70225$var$state = "restoring";
    setTimeout(() => {
      (0, $bbed8b41f857bcc0$export$24490316f764c430)(() => {
        if ($14c0b72509d70225$var$state === "restoring") {
          const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(target);
          if (documentObject.documentElement.style.webkitUserSelect === "none")
            documentObject.documentElement.style.webkitUserSelect = $14c0b72509d70225$var$savedUserSelect || "";
          $14c0b72509d70225$var$savedUserSelect = "";
          $14c0b72509d70225$var$state = "default";
        }
      });
    }, 300);
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    if (target && $14c0b72509d70225$var$modifiedElementMap.has(target)) {
      let targetOldUserSelect = $14c0b72509d70225$var$modifiedElementMap.get(target);
      if (target.style.userSelect === "none")
        target.style.userSelect = targetOldUserSelect;
      if (target.getAttribute("style") === "")
        target.removeAttribute("style");
      $14c0b72509d70225$var$modifiedElementMap.delete(target);
    }
  }
}

// node_modules/@react-aria/interactions/dist/context.mjs
var import_react18 = __toESM(require_react(), 1);
var $ae1eeba8b9eafd08$export$5165eccb35aaadb5 = (0, import_react18.default).createContext({
  register: () => {
  }
});
$ae1eeba8b9eafd08$export$5165eccb35aaadb5.displayName = "PressResponderContext";

// node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js
function _class_apply_descriptor_get(receiver, descriptor) {
  if (descriptor.get)
    return descriptor.get.call(receiver);
  return descriptor.value;
}

// node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js
function _class_extract_field_descriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver))
    throw new TypeError("attempted to " + action + " private field on non-instance");
  return privateMap.get(receiver);
}

// node_modules/@swc/helpers/esm/_class_private_field_get.js
function _class_private_field_get(receiver, privateMap) {
  var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
  return _class_apply_descriptor_get(receiver, descriptor);
}

// node_modules/@swc/helpers/esm/_check_private_redeclaration.js
function _check_private_redeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}

// node_modules/@swc/helpers/esm/_class_private_field_init.js
function _class_private_field_init(obj, privateMap, value) {
  _check_private_redeclaration(obj, privateMap);
  privateMap.set(obj, value);
}

// node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js
function _class_apply_descriptor_set(receiver, descriptor, value) {
  if (descriptor.set)
    descriptor.set.call(receiver, value);
  else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}

// node_modules/@swc/helpers/esm/_class_private_field_set.js
function _class_private_field_set(receiver, privateMap, value) {
  var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
  _class_apply_descriptor_set(receiver, descriptor, value);
  return value;
}

// node_modules/@react-aria/interactions/dist/usePress.mjs
var import_react19 = __toESM(require_react(), 1);
function $f6c31cce2adf654f$var$usePressResponderContext(props) {
  let context = (0, import_react19.useContext)((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5));
  if (context) {
    let { register, ...contextProps } = context;
    props = (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(contextProps, props);
    register();
  }
  (0, $e7801be82b4b2a53$export$4debdb1a3f0fa79e)(context, props.ref);
  return props;
}
var $f6c31cce2adf654f$var$_shouldStopPropagation = /* @__PURE__ */ new WeakMap();
var $f6c31cce2adf654f$var$PressEvent = class {
  continuePropagation() {
    (0, _class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, false);
  }
  get shouldStopPropagation() {
    return (0, _class_private_field_get)(this, $f6c31cce2adf654f$var$_shouldStopPropagation);
  }
  constructor(type, pointerType, originalEvent) {
    (0, _class_private_field_init)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, {
      writable: true,
      value: void 0
    });
    (0, _class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, true);
    this.type = type;
    this.pointerType = pointerType;
    this.target = originalEvent.currentTarget;
    this.shiftKey = originalEvent.shiftKey;
    this.metaKey = originalEvent.metaKey;
    this.ctrlKey = originalEvent.ctrlKey;
    this.altKey = originalEvent.altKey;
  }
};
var $f6c31cce2adf654f$var$LINK_CLICKED = Symbol("linkClicked");
function $f6c31cce2adf654f$export$45712eceda6fad21(props) {
  let {
    onPress,
    onPressChange,
    onPressStart,
    onPressEnd,
    onPressUp,
    isDisabled: isDisabled2,
    isPressed: isPressedProp,
    preventFocusOnPress,
    shouldCancelOnPointerExit,
    allowTextSelectionOnPress,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: _7,
    ...domProps
  } = $f6c31cce2adf654f$var$usePressResponderContext(props);
  let [isPressed, setPressed] = (0, import_react19.useState)(false);
  let ref = (0, import_react19.useRef)({
    isPressed: false,
    ignoreEmulatedMouseEvents: false,
    ignoreClickAfterPress: false,
    didFirePressStart: false,
    isTriggeringEvent: false,
    activePointerId: null,
    target: null,
    isOverTarget: false,
    pointerType: null
  });
  let { addGlobalListener, removeAllGlobalListeners } = (0, $03deb23ff14920c4$export$4eaf04e54aa8eed6)();
  let triggerPressStart = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType) => {
    let state = ref.current;
    if (isDisabled2 || state.didFirePressStart)
      return false;
    let shouldStopPropagation = true;
    state.isTriggeringEvent = true;
    if (onPressStart) {
      let event = new $f6c31cce2adf654f$var$PressEvent("pressstart", pointerType, originalEvent);
      onPressStart(event);
      shouldStopPropagation = event.shouldStopPropagation;
    }
    if (onPressChange)
      onPressChange(true);
    state.isTriggeringEvent = false;
    state.didFirePressStart = true;
    setPressed(true);
    return shouldStopPropagation;
  });
  let triggerPressEnd = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType, wasPressed = true) => {
    let state = ref.current;
    if (!state.didFirePressStart)
      return false;
    state.ignoreClickAfterPress = true;
    state.didFirePressStart = false;
    state.isTriggeringEvent = true;
    let shouldStopPropagation = true;
    if (onPressEnd) {
      let event = new $f6c31cce2adf654f$var$PressEvent("pressend", pointerType, originalEvent);
      onPressEnd(event);
      shouldStopPropagation = event.shouldStopPropagation;
    }
    if (onPressChange)
      onPressChange(false);
    setPressed(false);
    if (onPress && wasPressed && !isDisabled2) {
      let event = new $f6c31cce2adf654f$var$PressEvent("press", pointerType, originalEvent);
      onPress(event);
      shouldStopPropagation && (shouldStopPropagation = event.shouldStopPropagation);
    }
    state.isTriggeringEvent = false;
    return shouldStopPropagation;
  });
  let triggerPressUp = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType) => {
    let state = ref.current;
    if (isDisabled2)
      return false;
    if (onPressUp) {
      state.isTriggeringEvent = true;
      let event = new $f6c31cce2adf654f$var$PressEvent("pressup", pointerType, originalEvent);
      onPressUp(event);
      state.isTriggeringEvent = false;
      return event.shouldStopPropagation;
    }
    return true;
  });
  let cancel = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e7) => {
    let state = ref.current;
    if (state.isPressed && state.target) {
      if (state.isOverTarget && state.pointerType != null)
        triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e7), state.pointerType, false);
      state.isPressed = false;
      state.isOverTarget = false;
      state.activePointerId = null;
      state.pointerType = null;
      removeAllGlobalListeners();
      if (!allowTextSelectionOnPress)
        (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
    }
  });
  let cancelOnPointerExit = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e7) => {
    if (shouldCancelOnPointerExit)
      cancel(e7);
  });
  let pressProps = (0, import_react19.useMemo)(() => {
    let state = ref.current;
    let pressProps2 = {
      onKeyDown(e7) {
        if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e7.nativeEvent, e7.currentTarget) && e7.currentTarget.contains(e7.target)) {
          var _state_metaKeyEvents;
          if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e7.target, e7.key))
            e7.preventDefault();
          let shouldStopPropagation = true;
          if (!state.isPressed && !e7.repeat) {
            state.target = e7.currentTarget;
            state.isPressed = true;
            shouldStopPropagation = triggerPressStart(e7, "keyboard");
            let originalTarget = e7.currentTarget;
            let pressUp = (e8) => {
              if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e8, originalTarget) && !e8.repeat && originalTarget.contains(e8.target) && state.target)
                triggerPressUp($f6c31cce2adf654f$var$createEvent(state.target, e8), "keyboard");
            };
            addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e7.currentTarget), "keyup", (0, $ff5963eb1fccf552$export$e08e3b67e392101e)(pressUp, onKeyUp), true);
          }
          if (shouldStopPropagation)
            e7.stopPropagation();
          if (e7.metaKey && (0, $c87311424ea30a05$export$9ac100e40613ea10)())
            (_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.set(e7.key, e7.nativeEvent);
        } else if (e7.key === "Meta")
          state.metaKeyEvents = /* @__PURE__ */ new Map();
      },
      onClick(e7) {
        if (e7 && !e7.currentTarget.contains(e7.target))
          return;
        if (e7 && e7.button === 0 && !state.isTriggeringEvent && !(0, $ea8dcbcb9ea1b556$export$95185d699e05d4d7).isOpening) {
          let shouldStopPropagation = true;
          if (isDisabled2)
            e7.preventDefault();
          if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && !state.isPressed && (state.pointerType === "virtual" || (0, $6a7db85432448f7f$export$60278871457622de)(e7.nativeEvent))) {
            if (!isDisabled2 && !preventFocusOnPress)
              (0, $7215afc6de606d6b$export$de79e2c695e052f3)(e7.currentTarget);
            let stopPressStart = triggerPressStart(e7, "virtual");
            let stopPressUp = triggerPressUp(e7, "virtual");
            let stopPressEnd = triggerPressEnd(e7, "virtual");
            shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
          }
          state.ignoreEmulatedMouseEvents = false;
          state.ignoreClickAfterPress = false;
          if (shouldStopPropagation)
            e7.stopPropagation();
        }
      }
    };
    let onKeyUp = (e7) => {
      var _state_metaKeyEvents;
      if (state.isPressed && state.target && $f6c31cce2adf654f$var$isValidKeyboardEvent(e7, state.target)) {
        var _state_metaKeyEvents1;
        if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e7.target, e7.key))
          e7.preventDefault();
        let target = e7.target;
        triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e7), "keyboard", state.target.contains(target));
        removeAllGlobalListeners();
        if (e7.key !== "Enter" && $f6c31cce2adf654f$var$isHTMLAnchorLink(state.target) && state.target.contains(target) && !e7[$f6c31cce2adf654f$var$LINK_CLICKED]) {
          e7[$f6c31cce2adf654f$var$LINK_CLICKED] = true;
          (0, $ea8dcbcb9ea1b556$export$95185d699e05d4d7)(state.target, e7, false);
        }
        state.isPressed = false;
        (_state_metaKeyEvents1 = state.metaKeyEvents) === null || _state_metaKeyEvents1 === void 0 ? void 0 : _state_metaKeyEvents1.delete(e7.key);
      } else if (e7.key === "Meta" && ((_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.size)) {
        var _state_target;
        let events = state.metaKeyEvents;
        state.metaKeyEvents = void 0;
        for (let event of events.values())
          (_state_target = state.target) === null || _state_target === void 0 ? void 0 : _state_target.dispatchEvent(new KeyboardEvent("keyup", event));
      }
    };
    if (typeof PointerEvent !== "undefined") {
      pressProps2.onPointerDown = (e7) => {
        if (e7.button !== 0 || !e7.currentTarget.contains(e7.target))
          return;
        if ((0, $6a7db85432448f7f$export$29bf1b5f2c56cf63)(e7.nativeEvent)) {
          state.pointerType = "virtual";
          return;
        }
        if ($f6c31cce2adf654f$var$shouldPreventDefault(e7.currentTarget))
          e7.preventDefault();
        state.pointerType = e7.pointerType;
        let shouldStopPropagation = true;
        if (!state.isPressed) {
          state.isPressed = true;
          state.isOverTarget = true;
          state.activePointerId = e7.pointerId;
          state.target = e7.currentTarget;
          if (!isDisabled2 && !preventFocusOnPress)
            (0, $7215afc6de606d6b$export$de79e2c695e052f3)(e7.currentTarget);
          if (!allowTextSelectionOnPress)
            (0, $14c0b72509d70225$export$16a4697467175487)(state.target);
          shouldStopPropagation = triggerPressStart(e7, state.pointerType);
          addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e7.currentTarget), "pointermove", onPointerMove, false);
          addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e7.currentTarget), "pointerup", onPointerUp, false);
          addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e7.currentTarget), "pointercancel", onPointerCancel, false);
        }
        if (shouldStopPropagation)
          e7.stopPropagation();
      };
      pressProps2.onMouseDown = (e7) => {
        if (!e7.currentTarget.contains(e7.target))
          return;
        if (e7.button === 0) {
          if ($f6c31cce2adf654f$var$shouldPreventDefault(e7.currentTarget))
            e7.preventDefault();
          e7.stopPropagation();
        }
      };
      pressProps2.onPointerUp = (e7) => {
        if (!e7.currentTarget.contains(e7.target) || state.pointerType === "virtual")
          return;
        if (e7.button === 0 && $f6c31cce2adf654f$var$isOverTarget(e7, e7.currentTarget))
          triggerPressUp(e7, state.pointerType || e7.pointerType);
      };
      let onPointerMove = (e7) => {
        if (e7.pointerId !== state.activePointerId)
          return;
        if (state.target && $f6c31cce2adf654f$var$isOverTarget(e7, state.target)) {
          if (!state.isOverTarget && state.pointerType != null) {
            state.isOverTarget = true;
            triggerPressStart($f6c31cce2adf654f$var$createEvent(state.target, e7), state.pointerType);
          }
        } else if (state.target && state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = false;
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e7), state.pointerType, false);
          cancelOnPointerExit(e7);
        }
      };
      let onPointerUp = (e7) => {
        if (e7.pointerId === state.activePointerId && state.isPressed && e7.button === 0 && state.target) {
          if ($f6c31cce2adf654f$var$isOverTarget(e7, state.target) && state.pointerType != null)
            triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e7), state.pointerType);
          else if (state.isOverTarget && state.pointerType != null)
            triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e7), state.pointerType, false);
          state.isPressed = false;
          state.isOverTarget = false;
          state.activePointerId = null;
          state.pointerType = null;
          removeAllGlobalListeners();
          if (!allowTextSelectionOnPress)
            (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
        }
      };
      let onPointerCancel = (e7) => {
        cancel(e7);
      };
      pressProps2.onDragStart = (e7) => {
        if (!e7.currentTarget.contains(e7.target))
          return;
        cancel(e7);
      };
    } else {
      pressProps2.onMouseDown = (e7) => {
        if (e7.button !== 0 || !e7.currentTarget.contains(e7.target))
          return;
        if ($f6c31cce2adf654f$var$shouldPreventDefault(e7.currentTarget))
          e7.preventDefault();
        if (state.ignoreEmulatedMouseEvents) {
          e7.stopPropagation();
          return;
        }
        state.isPressed = true;
        state.isOverTarget = true;
        state.target = e7.currentTarget;
        state.pointerType = (0, $6a7db85432448f7f$export$60278871457622de)(e7.nativeEvent) ? "virtual" : "mouse";
        if (!isDisabled2 && !preventFocusOnPress)
          (0, $7215afc6de606d6b$export$de79e2c695e052f3)(e7.currentTarget);
        let shouldStopPropagation = triggerPressStart(e7, state.pointerType);
        if (shouldStopPropagation)
          e7.stopPropagation();
        addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e7.currentTarget), "mouseup", onMouseUp, false);
      };
      pressProps2.onMouseEnter = (e7) => {
        if (!e7.currentTarget.contains(e7.target))
          return;
        let shouldStopPropagation = true;
        if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
          state.isOverTarget = true;
          shouldStopPropagation = triggerPressStart(e7, state.pointerType);
        }
        if (shouldStopPropagation)
          e7.stopPropagation();
      };
      pressProps2.onMouseLeave = (e7) => {
        if (!e7.currentTarget.contains(e7.target))
          return;
        let shouldStopPropagation = true;
        if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
          state.isOverTarget = false;
          shouldStopPropagation = triggerPressEnd(e7, state.pointerType, false);
          cancelOnPointerExit(e7);
        }
        if (shouldStopPropagation)
          e7.stopPropagation();
      };
      pressProps2.onMouseUp = (e7) => {
        if (!e7.currentTarget.contains(e7.target))
          return;
        if (!state.ignoreEmulatedMouseEvents && e7.button === 0)
          triggerPressUp(e7, state.pointerType || "mouse");
      };
      let onMouseUp = (e7) => {
        if (e7.button !== 0)
          return;
        state.isPressed = false;
        removeAllGlobalListeners();
        if (state.ignoreEmulatedMouseEvents) {
          state.ignoreEmulatedMouseEvents = false;
          return;
        }
        if (state.target && $f6c31cce2adf654f$var$isOverTarget(e7, state.target) && state.pointerType != null)
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e7), state.pointerType);
        else if (state.target && state.isOverTarget && state.pointerType != null)
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e7), state.pointerType, false);
        state.isOverTarget = false;
      };
      pressProps2.onTouchStart = (e7) => {
        if (!e7.currentTarget.contains(e7.target))
          return;
        let touch = $f6c31cce2adf654f$var$getTouchFromEvent(e7.nativeEvent);
        if (!touch)
          return;
        state.activePointerId = touch.identifier;
        state.ignoreEmulatedMouseEvents = true;
        state.isOverTarget = true;
        state.isPressed = true;
        state.target = e7.currentTarget;
        state.pointerType = "touch";
        if (!isDisabled2 && !preventFocusOnPress)
          (0, $7215afc6de606d6b$export$de79e2c695e052f3)(e7.currentTarget);
        if (!allowTextSelectionOnPress)
          (0, $14c0b72509d70225$export$16a4697467175487)(state.target);
        let shouldStopPropagation = triggerPressStart(e7, state.pointerType);
        if (shouldStopPropagation)
          e7.stopPropagation();
        addGlobalListener((0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e7.currentTarget), "scroll", onScroll, true);
      };
      pressProps2.onTouchMove = (e7) => {
        if (!e7.currentTarget.contains(e7.target))
          return;
        if (!state.isPressed) {
          e7.stopPropagation();
          return;
        }
        let touch = $f6c31cce2adf654f$var$getTouchById(e7.nativeEvent, state.activePointerId);
        let shouldStopPropagation = true;
        if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e7.currentTarget)) {
          if (!state.isOverTarget && state.pointerType != null) {
            state.isOverTarget = true;
            shouldStopPropagation = triggerPressStart(e7, state.pointerType);
          }
        } else if (state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = false;
          shouldStopPropagation = triggerPressEnd(e7, state.pointerType, false);
          cancelOnPointerExit(e7);
        }
        if (shouldStopPropagation)
          e7.stopPropagation();
      };
      pressProps2.onTouchEnd = (e7) => {
        if (!e7.currentTarget.contains(e7.target))
          return;
        if (!state.isPressed) {
          e7.stopPropagation();
          return;
        }
        let touch = $f6c31cce2adf654f$var$getTouchById(e7.nativeEvent, state.activePointerId);
        let shouldStopPropagation = true;
        if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e7.currentTarget) && state.pointerType != null) {
          triggerPressUp(e7, state.pointerType);
          shouldStopPropagation = triggerPressEnd(e7, state.pointerType);
        } else if (state.isOverTarget && state.pointerType != null)
          shouldStopPropagation = triggerPressEnd(e7, state.pointerType, false);
        if (shouldStopPropagation)
          e7.stopPropagation();
        state.isPressed = false;
        state.activePointerId = null;
        state.isOverTarget = false;
        state.ignoreEmulatedMouseEvents = true;
        if (state.target && !allowTextSelectionOnPress)
          (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
        removeAllGlobalListeners();
      };
      pressProps2.onTouchCancel = (e7) => {
        if (!e7.currentTarget.contains(e7.target))
          return;
        e7.stopPropagation();
        if (state.isPressed)
          cancel(e7);
      };
      let onScroll = (e7) => {
        if (state.isPressed && e7.target.contains(state.target))
          cancel({
            currentTarget: state.target,
            shiftKey: false,
            ctrlKey: false,
            metaKey: false,
            altKey: false
          });
      };
      pressProps2.onDragStart = (e7) => {
        if (!e7.currentTarget.contains(e7.target))
          return;
        cancel(e7);
      };
    }
    return pressProps2;
  }, [
    addGlobalListener,
    isDisabled2,
    preventFocusOnPress,
    removeAllGlobalListeners,
    allowTextSelectionOnPress,
    cancel,
    cancelOnPointerExit,
    triggerPressEnd,
    triggerPressStart,
    triggerPressUp
  ]);
  (0, import_react19.useEffect)(() => {
    return () => {
      var _ref_current_target;
      if (!allowTextSelectionOnPress)
        (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)((_ref_current_target = ref.current.target) !== null && _ref_current_target !== void 0 ? _ref_current_target : void 0);
    };
  }, [
    allowTextSelectionOnPress
  ]);
  return {
    isPressed: isPressedProp || isPressed,
    pressProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(domProps, pressProps)
  };
}
function $f6c31cce2adf654f$var$isHTMLAnchorLink(target) {
  return target.tagName === "A" && target.hasAttribute("href");
}
function $f6c31cce2adf654f$var$isValidKeyboardEvent(event, currentTarget) {
  const { key, code } = event;
  const element = currentTarget;
  const role = element.getAttribute("role");
  return (key === "Enter" || key === " " || key === "Spacebar" || code === "Space") && !(element instanceof (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element).HTMLInputElement && !$f6c31cce2adf654f$var$isValidInputKey(element, key) || element instanceof (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element).HTMLTextAreaElement || element.isContentEditable) && // Links should only trigger with Enter key
  !((role === "link" || !role && $f6c31cce2adf654f$var$isHTMLAnchorLink(element)) && key !== "Enter");
}
function $f6c31cce2adf654f$var$getTouchFromEvent(event) {
  const { targetTouches } = event;
  if (targetTouches.length > 0)
    return targetTouches[0];
  return null;
}
function $f6c31cce2adf654f$var$getTouchById(event, pointerId) {
  const changedTouches = event.changedTouches;
  for (let i11 = 0; i11 < changedTouches.length; i11++) {
    const touch = changedTouches[i11];
    if (touch.identifier === pointerId)
      return touch;
  }
  return null;
}
function $f6c31cce2adf654f$var$createEvent(target, e7) {
  return {
    currentTarget: target,
    shiftKey: e7.shiftKey,
    ctrlKey: e7.ctrlKey,
    metaKey: e7.metaKey,
    altKey: e7.altKey
  };
}
function $f6c31cce2adf654f$var$getPointClientRect(point) {
  let offsetX = 0;
  let offsetY = 0;
  if (point.width !== void 0)
    offsetX = point.width / 2;
  else if (point.radiusX !== void 0)
    offsetX = point.radiusX;
  if (point.height !== void 0)
    offsetY = point.height / 2;
  else if (point.radiusY !== void 0)
    offsetY = point.radiusY;
  return {
    top: point.clientY - offsetY,
    right: point.clientX + offsetX,
    bottom: point.clientY + offsetY,
    left: point.clientX - offsetX
  };
}
function $f6c31cce2adf654f$var$areRectanglesOverlapping(a15, b7) {
  if (a15.left > b7.right || b7.left > a15.right)
    return false;
  if (a15.top > b7.bottom || b7.top > a15.bottom)
    return false;
  return true;
}
function $f6c31cce2adf654f$var$isOverTarget(point, target) {
  let rect = target.getBoundingClientRect();
  let pointRect = $f6c31cce2adf654f$var$getPointClientRect(point);
  return $f6c31cce2adf654f$var$areRectanglesOverlapping(rect, pointRect);
}
function $f6c31cce2adf654f$var$shouldPreventDefault(target) {
  return !(target instanceof HTMLElement) || !target.hasAttribute("draggable");
}
function $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(target, key) {
  if (target instanceof HTMLInputElement)
    return !$f6c31cce2adf654f$var$isValidInputKey(target, key);
  if (target instanceof HTMLButtonElement)
    return target.type !== "submit" && target.type !== "reset";
  if ($f6c31cce2adf654f$var$isHTMLAnchorLink(target))
    return false;
  return true;
}
var $f6c31cce2adf654f$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $f6c31cce2adf654f$var$isValidInputKey(target, key) {
  return target.type === "checkbox" || target.type === "radio" ? key === " " : $f6c31cce2adf654f$var$nonTextInputTypes.has(target.type);
}

// node_modules/@react-aria/interactions/dist/Pressable.mjs
var import_react20 = __toESM(require_react(), 1);
var $3b117e43dc0ca95d$export$27c701ed9e449e99 = (0, import_react20.default).forwardRef(({ children, ...props }, ref) => {
  ref = (0, $df56164dff5785e2$export$4338b53315abf666)(ref);
  let { pressProps } = (0, $f6c31cce2adf654f$export$45712eceda6fad21)({
    ...props,
    ref
  });
  let child = (0, import_react20.default).Children.only(children);
  return (0, import_react20.default).cloneElement(
    child,
    // @ts-ignore
    {
      ref,
      ...(0, $3ef42575df84b30b$export$9d1611c77c2fe928)(child.props, pressProps)
    }
  );
});

// node_modules/@react-aria/interactions/dist/PressResponder.mjs
var import_react21 = __toESM(require_react(), 1);
var $f1ab8c75478c6f73$export$3351871ee4b288b8 = (0, import_react21.default).forwardRef(({ children, ...props }, ref) => {
  let isRegistered = (0, import_react21.useRef)(false);
  let prevContext = (0, import_react21.useContext)((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5));
  ref = (0, $df56164dff5785e2$export$4338b53315abf666)(ref || (prevContext === null || prevContext === void 0 ? void 0 : prevContext.ref));
  let context = (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(prevContext || {}, {
    ...props,
    ref,
    register() {
      isRegistered.current = true;
      if (prevContext)
        prevContext.register();
    }
  });
  (0, $e7801be82b4b2a53$export$4debdb1a3f0fa79e)(prevContext, ref);
  (0, import_react21.useEffect)(() => {
    if (!isRegistered.current) {
      console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.");
      isRegistered.current = true;
    }
  }, []);
  return (0, import_react21.default).createElement((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5).Provider, {
    value: context
  }, children);
});

// node_modules/@react-aria/interactions/dist/utils.mjs
var import_react22 = __toESM(require_react(), 1);
var $8a9cb279dc87e130$export$905e7fc544a71f36 = class {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    this.defaultPrevented = true;
    this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation();
    this.isPropagationStopped = () => true;
  }
  isPropagationStopped() {
    return false;
  }
  persist() {
  }
  constructor(type, nativeEvent) {
    this.nativeEvent = nativeEvent;
    this.target = nativeEvent.target;
    this.currentTarget = nativeEvent.currentTarget;
    this.relatedTarget = nativeEvent.relatedTarget;
    this.bubbles = nativeEvent.bubbles;
    this.cancelable = nativeEvent.cancelable;
    this.defaultPrevented = nativeEvent.defaultPrevented;
    this.eventPhase = nativeEvent.eventPhase;
    this.isTrusted = nativeEvent.isTrusted;
    this.timeStamp = nativeEvent.timeStamp;
    this.type = type;
  }
};
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
  let stateRef = (0, import_react22.useRef)({
    isFocused: false,
    observer: null
  });
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    const state = stateRef.current;
    return () => {
      if (state.observer) {
        state.observer.disconnect();
        state.observer = null;
      }
    };
  }, []);
  let dispatchBlur = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e7) => {
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e7);
  });
  return (0, import_react22.useCallback)((e7) => {
    if (e7.target instanceof HTMLButtonElement || e7.target instanceof HTMLInputElement || e7.target instanceof HTMLTextAreaElement || e7.target instanceof HTMLSelectElement) {
      stateRef.current.isFocused = true;
      let target = e7.target;
      let onBlurHandler = (e8) => {
        stateRef.current.isFocused = false;
        if (target.disabled)
          dispatchBlur(new $8a9cb279dc87e130$export$905e7fc544a71f36("blur", e8));
        if (stateRef.current.observer) {
          stateRef.current.observer.disconnect();
          stateRef.current.observer = null;
        }
      };
      target.addEventListener("focusout", onBlurHandler, {
        once: true
      });
      stateRef.current.observer = new MutationObserver(() => {
        if (stateRef.current.isFocused && target.disabled) {
          var _stateRef_current_observer;
          (_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 ? void 0 : _stateRef_current_observer.disconnect();
          let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
          target.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: relatedTargetEl
          }));
          target.dispatchEvent(new FocusEvent("focusout", {
            bubbles: true,
            relatedTarget: relatedTargetEl
          }));
        }
      });
      stateRef.current.observer.observe(target, {
        attributes: true,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    dispatchBlur
  ]);
}

// node_modules/@react-aria/interactions/dist/useFocus.mjs
var import_react23 = __toESM(require_react(), 1);
function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
  let { isDisabled: isDisabled2, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
  const onBlur = (0, import_react23.useCallback)((e7) => {
    if (e7.target === e7.currentTarget) {
      if (onBlurProp)
        onBlurProp(e7);
      if (onFocusChange)
        onFocusChange(false);
      return true;
    }
  }, [
    onBlurProp,
    onFocusChange
  ]);
  const onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
  const onFocus = (0, import_react23.useCallback)((e7) => {
    const ownerDocument = (0, $431fbd86ca7dc216$export$b204af158042fbac)(e7.target);
    if (e7.target === e7.currentTarget && ownerDocument.activeElement === e7.target) {
      if (onFocusProp)
        onFocusProp(e7);
      if (onFocusChange)
        onFocusChange(true);
      onSyntheticFocus(e7);
    }
  }, [
    onFocusChange,
    onFocusProp,
    onSyntheticFocus
  ]);
  return {
    focusProps: {
      onFocus: !isDisabled2 && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
      onBlur: !isDisabled2 && (onBlurProp || onFocusChange) ? onBlur : void 0
    }
  };
}

// node_modules/@react-aria/interactions/dist/useFocusVisible.mjs
var import_react24 = __toESM(require_react(), 1);
var $507fabe10e71c6fb$var$currentModality = null;
var $507fabe10e71c6fb$var$changeHandlers = /* @__PURE__ */ new Set();
var $507fabe10e71c6fb$export$d90243b58daecda7 = /* @__PURE__ */ new Map();
var $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
var $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
var $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
  Tab: true,
  Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e7) {
  for (let handler of $507fabe10e71c6fb$var$changeHandlers)
    handler(modality, e7);
}
function $507fabe10e71c6fb$var$isValidKey(e7) {
  return !(e7.metaKey || !(0, $c87311424ea30a05$export$9ac100e40613ea10)() && e7.altKey || e7.ctrlKey || e7.key === "Control" || e7.key === "Shift" || e7.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e7) {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
  if ($507fabe10e71c6fb$var$isValidKey(e7)) {
    $507fabe10e71c6fb$var$currentModality = "keyboard";
    $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e7);
  }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e7) {
  $507fabe10e71c6fb$var$currentModality = "pointer";
  if (e7.type === "mousedown" || e7.type === "pointerdown") {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e7);
  }
}
function $507fabe10e71c6fb$var$handleClickEvent(e7) {
  if ((0, $6a7db85432448f7f$export$60278871457622de)(e7)) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$currentModality = "virtual";
  }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e7) {
  if (e7.target === window || e7.target === document)
    return;
  if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
    $507fabe10e71c6fb$var$currentModality = "virtual";
    $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e7);
  }
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
  if (typeof window === "undefined" || $507fabe10e71c6fb$export$d90243b58daecda7.get((0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element)))
    return;
  const windowObject = (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element);
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  let focus = windowObject.HTMLElement.prototype.focus;
  windowObject.HTMLElement.prototype.focus = function() {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    focus.apply(this, arguments);
  };
  documentObject.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  windowObject.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  windowObject.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else {
    documentObject.addEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  windowObject.addEventListener("beforeunload", () => {
    $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
  }, {
    once: true
  });
  $507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, {
    focus
  });
}
var $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener) => {
  const windowObject = (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element);
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  if (loadListener)
    documentObject.removeEventListener("DOMContentLoaded", loadListener);
  if (!$507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject))
    return;
  windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus;
  documentObject.removeEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  windowObject.removeEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  windowObject.removeEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.removeEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else {
    documentObject.removeEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  $507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject);
};
function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  let loadListener;
  if (documentObject.readyState !== "loading")
    $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
  else {
    loadListener = () => {
      $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
    };
    documentObject.addEventListener("DOMContentLoaded", loadListener);
  }
  return () => $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
}
if (typeof document !== "undefined")
  $507fabe10e71c6fb$export$2f1888112f558a7d();
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
  return $507fabe10e71c6fb$var$currentModality !== "pointer";
}
var $507fabe10e71c6fb$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e7) {
  var _e_target;
  const IHTMLInputElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e7 === null || e7 === void 0 ? void 0 : e7.target).HTMLInputElement : HTMLInputElement;
  const IHTMLTextAreaElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e7 === null || e7 === void 0 ? void 0 : e7.target).HTMLTextAreaElement : HTMLTextAreaElement;
  const IHTMLElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e7 === null || e7 === void 0 ? void 0 : e7.target).HTMLElement : HTMLElement;
  const IKeyboardEvent = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e7 === null || e7 === void 0 ? void 0 : e7.target).KeyboardEvent : KeyboardEvent;
  isTextInput = isTextInput || (e7 === null || e7 === void 0 ? void 0 : e7.target) instanceof IHTMLInputElement && !$507fabe10e71c6fb$var$nonTextInputTypes.has(e7 === null || e7 === void 0 ? void 0 : (_e_target = e7.target) === null || _e_target === void 0 ? void 0 : _e_target.type) || (e7 === null || e7 === void 0 ? void 0 : e7.target) instanceof IHTMLTextAreaElement || (e7 === null || e7 === void 0 ? void 0 : e7.target) instanceof IHTMLElement && (e7 === null || e7 === void 0 ? void 0 : e7.target.isContentEditable);
  return !(isTextInput && modality === "keyboard" && e7 instanceof IKeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e7.key]);
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
  $507fabe10e71c6fb$var$setupGlobalFocusEvents();
  (0, import_react24.useEffect)(() => {
    let handler = (modality, e7) => {
      if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(!!(opts === null || opts === void 0 ? void 0 : opts.isTextInput), modality, e7))
        return;
      fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
    };
    $507fabe10e71c6fb$var$changeHandlers.add(handler);
    return () => {
      $507fabe10e71c6fb$var$changeHandlers.delete(handler);
    };
  }, deps);
}

// node_modules/@react-aria/interactions/dist/useFocusWithin.mjs
var import_react25 = __toESM(require_react(), 1);
function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
  let { isDisabled: isDisabled2, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
  let state = (0, import_react25.useRef)({
    isFocusWithin: false
  });
  let onBlur = (0, import_react25.useCallback)((e7) => {
    if (state.current.isFocusWithin && !e7.currentTarget.contains(e7.relatedTarget)) {
      state.current.isFocusWithin = false;
      if (onBlurWithin)
        onBlurWithin(e7);
      if (onFocusWithinChange)
        onFocusWithinChange(false);
    }
  }, [
    onBlurWithin,
    onFocusWithinChange,
    state
  ]);
  let onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
  let onFocus = (0, import_react25.useCallback)((e7) => {
    if (!state.current.isFocusWithin && document.activeElement === e7.target) {
      if (onFocusWithin)
        onFocusWithin(e7);
      if (onFocusWithinChange)
        onFocusWithinChange(true);
      state.current.isFocusWithin = true;
      onSyntheticFocus(e7);
    }
  }, [
    onFocusWithin,
    onFocusWithinChange,
    onSyntheticFocus
  ]);
  if (isDisabled2)
    return {
      focusWithinProps: {
        // These should not have been null, that would conflict in mergeProps
        onFocus: void 0,
        onBlur: void 0
      }
    };
  return {
    focusWithinProps: {
      onFocus,
      onBlur
    }
  };
}

// node_modules/@react-aria/interactions/dist/useHover.mjs
var import_react26 = __toESM(require_react(), 1);
var $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
var $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
  $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
  setTimeout(() => {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
  }, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e7) {
  if (e7.pointerType === "touch")
    $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
  if (typeof document === "undefined")
    return;
  if (typeof PointerEvent !== "undefined")
    document.addEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
  else
    document.addEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
  $6179b936705e76d3$var$hoverCount++;
  return () => {
    $6179b936705e76d3$var$hoverCount--;
    if ($6179b936705e76d3$var$hoverCount > 0)
      return;
    if (typeof PointerEvent !== "undefined")
      document.removeEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
    else
      document.removeEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
  };
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
  let { onHoverStart, onHoverChange, onHoverEnd, isDisabled: isDisabled2 } = props;
  let [isHovered, setHovered] = (0, import_react26.useState)(false);
  let state = (0, import_react26.useRef)({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;
  (0, import_react26.useEffect)($6179b936705e76d3$var$setupGlobalTouchEvents, []);
  let { hoverProps, triggerHoverEnd } = (0, import_react26.useMemo)(() => {
    let triggerHoverStart = (event, pointerType) => {
      state.pointerType = pointerType;
      if (isDisabled2 || pointerType === "touch" || state.isHovered || !event.currentTarget.contains(event.target))
        return;
      state.isHovered = true;
      let target = event.currentTarget;
      state.target = target;
      if (onHoverStart)
        onHoverStart({
          type: "hoverstart",
          target,
          pointerType
        });
      if (onHoverChange)
        onHoverChange(true);
      setHovered(true);
    };
    let triggerHoverEnd2 = (event, pointerType) => {
      state.pointerType = "";
      state.target = null;
      if (pointerType === "touch" || !state.isHovered)
        return;
      state.isHovered = false;
      let target = event.currentTarget;
      if (onHoverEnd)
        onHoverEnd({
          type: "hoverend",
          target,
          pointerType
        });
      if (onHoverChange)
        onHoverChange(false);
      setHovered(false);
    };
    let hoverProps2 = {};
    if (typeof PointerEvent !== "undefined") {
      hoverProps2.onPointerEnter = (e7) => {
        if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e7.pointerType === "mouse")
          return;
        triggerHoverStart(e7, e7.pointerType);
      };
      hoverProps2.onPointerLeave = (e7) => {
        if (!isDisabled2 && e7.currentTarget.contains(e7.target))
          triggerHoverEnd2(e7, e7.pointerType);
      };
    } else {
      hoverProps2.onTouchStart = () => {
        state.ignoreEmulatedMouseEvents = true;
      };
      hoverProps2.onMouseEnter = (e7) => {
        if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents)
          triggerHoverStart(e7, "mouse");
        state.ignoreEmulatedMouseEvents = false;
      };
      hoverProps2.onMouseLeave = (e7) => {
        if (!isDisabled2 && e7.currentTarget.contains(e7.target))
          triggerHoverEnd2(e7, "mouse");
      };
    }
    return {
      hoverProps: hoverProps2,
      triggerHoverEnd: triggerHoverEnd2
    };
  }, [
    onHoverStart,
    onHoverChange,
    onHoverEnd,
    isDisabled2,
    state
  ]);
  (0, import_react26.useEffect)(() => {
    if (isDisabled2)
      triggerHoverEnd({
        currentTarget: state.target
      }, state.pointerType);
  }, [
    isDisabled2
  ]);
  return {
    hoverProps,
    isHovered
  };
}

// node_modules/@react-aria/interactions/dist/useInteractOutside.mjs
var import_react27 = __toESM(require_react(), 1);

// node_modules/@react-aria/interactions/dist/useMove.mjs
var import_react28 = __toESM(require_react(), 1);

// node_modules/@react-aria/interactions/dist/useScrollWheel.mjs
var import_react29 = __toESM(require_react(), 1);

// node_modules/@react-aria/interactions/dist/useLongPress.mjs
var import_react30 = __toESM(require_react(), 1);

// node_modules/@react-aria/focus/dist/FocusScope.mjs
var import_react31 = __toESM(require_react(), 1);
var $9bf71ea28793e738$var$FocusContext = (0, import_react31.default).createContext(null);
var $9bf71ea28793e738$var$focusableElements = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[contenteditable]"
];
var $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
$9bf71ea28793e738$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
var $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $9bf71ea28793e738$var$isElementInScope(element, scope) {
  if (!element)
    return false;
  if (!scope)
    return false;
  return scope.some((node) => node.contains(element));
}
var $9bf71ea28793e738$var$Tree = class _$9bf71ea28793e738$var$Tree {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(data) {
    return this.fastMap.get(data);
  }
  addTreeNode(scopeRef, parent, nodeToRestore) {
    let parentNode = this.fastMap.get(parent !== null && parent !== void 0 ? parent : null);
    if (!parentNode)
      return;
    let node = new $9bf71ea28793e738$var$TreeNode({
      scopeRef
    });
    parentNode.addChild(node);
    node.parent = parentNode;
    this.fastMap.set(scopeRef, node);
    if (nodeToRestore)
      node.nodeToRestore = nodeToRestore;
  }
  addNode(node) {
    this.fastMap.set(node.scopeRef, node);
  }
  removeTreeNode(scopeRef) {
    if (scopeRef === null)
      return;
    let node = this.fastMap.get(scopeRef);
    if (!node)
      return;
    let parentNode = node.parent;
    for (let current of this.traverse())
      if (current !== node && node.nodeToRestore && current.nodeToRestore && node.scopeRef && node.scopeRef.current && $9bf71ea28793e738$var$isElementInScope(current.nodeToRestore, node.scopeRef.current))
        current.nodeToRestore = node.nodeToRestore;
    let children = node.children;
    if (parentNode) {
      parentNode.removeChild(node);
      if (children.size > 0)
        children.forEach((child) => parentNode && parentNode.addChild(child));
    }
    this.fastMap.delete(node.scopeRef);
  }
  // Pre Order Depth First
  *traverse(node = this.root) {
    if (node.scopeRef != null)
      yield node;
    if (node.children.size > 0)
      for (let child of node.children)
        yield* this.traverse(child);
  }
  clone() {
    var _node_parent;
    let newTree = new _$9bf71ea28793e738$var$Tree();
    var _node_parent_scopeRef;
    for (let node of this.traverse())
      newTree.addTreeNode(node.scopeRef, (_node_parent_scopeRef = (_node_parent = node.parent) === null || _node_parent === void 0 ? void 0 : _node_parent.scopeRef) !== null && _node_parent_scopeRef !== void 0 ? _node_parent_scopeRef : null, node.nodeToRestore);
    return newTree;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map();
    this.root = new $9bf71ea28793e738$var$TreeNode({
      scopeRef: null
    });
    this.fastMap.set(null, this.root);
  }
};
var $9bf71ea28793e738$var$TreeNode = class {
  addChild(node) {
    this.children.add(node);
    node.parent = this;
  }
  removeChild(node) {
    this.children.delete(node);
    node.parent = void 0;
  }
  constructor(props) {
    this.children = /* @__PURE__ */ new Set();
    this.contain = false;
    this.scopeRef = props.scopeRef;
  }
};
var $9bf71ea28793e738$export$d06fae2ee68b101e = new $9bf71ea28793e738$var$Tree();

// node_modules/@react-aria/focus/dist/useFocusRing.mjs
var import_react32 = __toESM(require_react(), 1);
function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
  let { autoFocus = false, isTextInput, within } = props;
  let state = (0, import_react32.useRef)({
    isFocused: false,
    isFocusVisible: autoFocus || (0, $507fabe10e71c6fb$export$b9b3dfddab17db27)()
  });
  let [isFocused, setFocused] = (0, import_react32.useState)(false);
  let [isFocusVisibleState, setFocusVisible] = (0, import_react32.useState)(() => state.current.isFocused && state.current.isFocusVisible);
  let updateState = (0, import_react32.useCallback)(() => setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
  let onFocusChange = (0, import_react32.useCallback)((isFocused2) => {
    state.current.isFocused = isFocused2;
    setFocused(isFocused2);
    updateState();
  }, [
    updateState
  ]);
  (0, $507fabe10e71c6fb$export$ec71b4b83ac08ec3)((isFocusVisible) => {
    state.current.isFocusVisible = isFocusVisible;
    updateState();
  }, [], {
    isTextInput
  });
  let { focusProps } = (0, $a1ea59d68270f0dd$export$f8168d8dd8fd66e6)({
    isDisabled: within,
    onFocusChange
  });
  let { focusWithinProps } = (0, $9ab94262bd0047c7$export$420e68273165f4ec)({
    isDisabled: !within,
    onFocusWithinChange: onFocusChange
  });
  return {
    isFocused,
    isFocusVisible: isFocusVisibleState,
    focusProps: within ? focusWithinProps : focusProps
  };
}

// node_modules/@react-aria/focus/dist/FocusRing.mjs
var import_react33 = __toESM(require_react(), 1);

// node_modules/@react-aria/focus/dist/useFocusable.mjs
var import_react34 = __toESM(require_react(), 1);
var $e6afbd83fe6ebbd2$var$FocusableContext = (0, import_react34.default).createContext(null);
function $e6afbd83fe6ebbd2$var$FocusableProvider(props, ref) {
  let { children, ...otherProps } = props;
  let objRef = (0, $df56164dff5785e2$export$4338b53315abf666)(ref);
  let context = {
    ...otherProps,
    ref: objRef
  };
  return (0, import_react34.default).createElement($e6afbd83fe6ebbd2$var$FocusableContext.Provider, {
    value: context
  }, children);
}
var $e6afbd83fe6ebbd2$export$13f3202a3e5ddd5 = (0, import_react34.default).forwardRef($e6afbd83fe6ebbd2$var$FocusableProvider);

// node_modules/@react-aria/focus/dist/useHasTabbableChild.mjs
var import_react35 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/button/button.js
var import_react43 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-active-press.js
var import_react40 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t15, e7, n14) => e7 in t15 ? i(t15, e7, { enumerable: true, configurable: true, writable: true, value: n14 }) : t15[e7] = n14;
var r2 = (t15, e7, n14) => (d(t15, typeof e7 != "symbol" ? e7 + "" : e7, n14), n14);
var o = class {
  constructor() {
    r2(this, "current", this.detect());
    r2(this, "handoffState", "pending");
    r2(this, "currentId", 0);
  }
  set(e7) {
    this.current !== e7 && (this.handoffState = "pending", this.currentId = 0, this.current = e7);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/utils/owner.js
function u(r14) {
  return s.isServer ? null : r14 instanceof Node ? r14.ownerDocument : r14 != null && r14.hasOwnProperty("current") && r14.current instanceof Node ? r14.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react36 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t(e7) {
  typeof queueMicrotask == "function" ? queueMicrotask(e7) : Promise.resolve().then(e7).catch((o17) => setTimeout(() => {
    throw o17;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o2() {
  let n14 = [], r14 = { addEventListener(e7, t15, s16, a15) {
    return e7.addEventListener(t15, s16, a15), r14.add(() => e7.removeEventListener(t15, s16, a15));
  }, requestAnimationFrame(...e7) {
    let t15 = requestAnimationFrame(...e7);
    return r14.add(() => cancelAnimationFrame(t15));
  }, nextFrame(...e7) {
    return r14.requestAnimationFrame(() => r14.requestAnimationFrame(...e7));
  }, setTimeout(...e7) {
    let t15 = setTimeout(...e7);
    return r14.add(() => clearTimeout(t15));
  }, microTask(...e7) {
    let t15 = { current: true };
    return t(() => {
      t15.current && e7[0]();
    }), r14.add(() => {
      t15.current = false;
    });
  }, style(e7, t15, s16) {
    let a15 = e7.style.getPropertyValue(t15);
    return Object.assign(e7.style, { [t15]: s16 }), this.add(() => {
      Object.assign(e7.style, { [t15]: a15 });
    });
  }, group(e7) {
    let t15 = o2();
    return e7(t15), this.add(() => t15.dispose());
  }, add(e7) {
    return n14.includes(e7) || n14.push(e7), () => {
      let t15 = n14.indexOf(e7);
      if (t15 >= 0)
        for (let s16 of n14.splice(t15, 1))
          s16();
    };
  }, dispose() {
    for (let e7 of n14.splice(0))
      e7();
  } };
  return r14;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
  let [e7] = (0, import_react36.useState)(o2);
  return (0, import_react36.useEffect)(() => () => e7.dispose(), [e7]), e7;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react39 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react38 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react37 = __toESM(require_react(), 1);
var n = (e7, t15) => {
  s.isServer ? (0, import_react37.useEffect)(e7, t15) : (0, import_react37.useLayoutEffect)(e7, t15);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
function s3(e7) {
  let r14 = (0, import_react38.useRef)(e7);
  return n(() => {
    r14.current = e7;
  }, [e7]), r14;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var o4 = function(t15) {
  let e7 = s3(t15);
  return import_react39.default.useCallback((...r14) => e7.current(...r14), [e7]);
};

// node_modules/@headlessui/react/dist/hooks/use-active-press.js
function E(e7) {
  let t15 = e7.width / 2, n14 = e7.height / 2;
  return { top: e7.clientY - n14, right: e7.clientX + t15, bottom: e7.clientY + n14, left: e7.clientX - t15 };
}
function P(e7, t15) {
  return !(!e7 || !t15 || e7.right < t15.left || e7.left > t15.right || e7.bottom < t15.top || e7.top > t15.bottom);
}
function w({ disabled: e7 = false } = {}) {
  let t15 = (0, import_react40.useRef)(null), [n14, l15] = (0, import_react40.useState)(false), r14 = p(), o17 = o4(() => {
    t15.current = null, l15(false), r14.dispose();
  }), f21 = o4((s16) => {
    if (r14.dispose(), t15.current === null) {
      t15.current = s16.currentTarget, l15(true);
      {
        let i11 = u(s16.currentTarget);
        r14.addEventListener(i11, "pointerup", o17, false), r14.addEventListener(i11, "pointermove", (c13) => {
          if (t15.current) {
            let p8 = E(c13);
            l15(P(p8, t15.current.getBoundingClientRect()));
          }
        }, false), r14.addEventListener(i11, "pointercancel", o17, false);
      }
    }
  });
  return { pressed: n14, pressProps: e7 ? {} : { onPointerDown: f21, onPointerUp: o17, onClick: o17 } };
}

// node_modules/@headlessui/react/dist/internal/disabled.js
var import_react41 = __toESM(require_react(), 1);
var e = (0, import_react41.createContext)(void 0);
function a3() {
  return (0, import_react41.useContext)(e);
}
function l({ value: t15, children: o17 }) {
  return import_react41.default.createElement(e.Provider, { value: t15 }, o17);
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react42 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function t3(...r14) {
  return Array.from(new Set(r14.flatMap((n14) => typeof n14 == "string" ? n14.split(" ") : []))).filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/match.js
function u2(r14, n14, ...a15) {
  if (r14 in n14) {
    let e7 = n14[r14];
    return typeof e7 == "function" ? e7(...a15) : e7;
  }
  let t15 = new Error(`Tried to handle "${r14}" but there is no handler defined. Only defined handlers are: ${Object.keys(n14).map((e7) => `"${e7}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t15, u2), t15;
}

// node_modules/@headlessui/react/dist/utils/render.js
var O = ((a15) => (a15[a15.None = 0] = "None", a15[a15.RenderStrategy = 1] = "RenderStrategy", a15[a15.Static = 2] = "Static", a15))(O || {});
var M = ((e7) => (e7[e7.Unmount = 0] = "Unmount", e7[e7.Hidden = 1] = "Hidden", e7))(M || {});
function H({ ourProps: r14, theirProps: n14, slot: e7, defaultTag: a15, features: s16, visible: t15 = true, name: l15, mergeRefs: i11 }) {
  i11 = i11 != null ? i11 : A;
  let o17 = N(n14, r14);
  if (t15)
    return b(o17, e7, a15, l15, i11);
  let y9 = s16 != null ? s16 : 0;
  if (y9 & 2) {
    let { static: f21 = false, ...u16 } = o17;
    if (f21)
      return b(u16, e7, a15, l15, i11);
  }
  if (y9 & 1) {
    let { unmount: f21 = true, ...u16 } = o17;
    return u2(f21 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return b({ ...u16, hidden: true, style: { display: "none" } }, e7, a15, l15, i11);
    } });
  }
  return b(o17, e7, a15, l15, i11);
}
function b(r14, n14 = {}, e7, a15, s16) {
  let { as: t15 = e7, children: l15, refName: i11 = "ref", ...o17 } = h(r14, ["unmount", "static"]), y9 = r14.ref !== void 0 ? { [i11]: r14.ref } : {}, f21 = typeof l15 == "function" ? l15(n14) : l15;
  "className" in o17 && o17.className && typeof o17.className == "function" && (o17.className = o17.className(n14)), o17["aria-labelledby"] && o17["aria-labelledby"] === o17.id && (o17["aria-labelledby"] = void 0);
  let u16 = {};
  if (n14) {
    let d15 = false, p8 = [];
    for (let [c13, T12] of Object.entries(n14))
      typeof T12 == "boolean" && (d15 = true), T12 === true && p8.push(c13.replace(/([A-Z])/g, (g7) => `-${g7.toLowerCase()}`));
    if (d15) {
      u16["data-headlessui-state"] = p8.join(" ");
      for (let c13 of p8)
        u16[`data-${c13}`] = "";
    }
  }
  if (t15 === import_react42.Fragment && (Object.keys(m2(o17)).length > 0 || Object.keys(m2(u16)).length > 0))
    if (!(0, import_react42.isValidElement)(f21) || Array.isArray(f21) && f21.length > 1) {
      if (Object.keys(m2(o17)).length > 0)
        throw new Error(['Passing props on "Fragment"!', "", `The current component <${a15} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(m2(o17)).concat(Object.keys(m2(u16))).map((d15) => `  - ${d15}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d15) => `  - ${d15}`).join(`
`)].join(`
`));
    } else {
      let d15 = f21.props, p8 = d15 == null ? void 0 : d15.className, c13 = typeof p8 == "function" ? (...F6) => t3(p8(...F6), o17.className) : t3(p8, o17.className), T12 = c13 ? { className: c13 } : {}, g7 = N(f21.props, m2(h(o17, ["ref"])));
      for (let F6 in u16)
        F6 in g7 && delete u16[F6];
      return (0, import_react42.cloneElement)(f21, Object.assign({}, g7, u16, y9, { ref: s16(f21.ref, y9.ref) }, T12));
    }
  return (0, import_react42.createElement)(t15, Object.assign({}, h(o17, ["ref"]), t15 !== import_react42.Fragment && y9, t15 !== import_react42.Fragment && u16), f21);
}
function U() {
  let r14 = (0, import_react42.useRef)([]), n14 = (0, import_react42.useCallback)((e7) => {
    for (let a15 of r14.current)
      a15 != null && (typeof a15 == "function" ? a15(e7) : a15.current = e7);
  }, []);
  return (...e7) => {
    if (!e7.every((a15) => a15 == null))
      return r14.current = e7, n14;
  };
}
function A(...r14) {
  return r14.every((n14) => n14 == null) ? void 0 : (n14) => {
    for (let e7 of r14)
      e7 != null && (typeof e7 == "function" ? e7(n14) : e7.current = n14);
  };
}
function N(...r14) {
  var a15;
  if (r14.length === 0)
    return {};
  if (r14.length === 1)
    return r14[0];
  let n14 = {}, e7 = {};
  for (let s16 of r14)
    for (let t15 in s16)
      t15.startsWith("on") && typeof s16[t15] == "function" ? ((a15 = e7[t15]) != null || (e7[t15] = []), e7[t15].push(s16[t15])) : n14[t15] = s16[t15];
  if (n14.disabled || n14["aria-disabled"])
    for (let s16 in e7)
      /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(s16) && (e7[s16] = [(t15) => {
        var l15;
        return (l15 = t15 == null ? void 0 : t15.preventDefault) == null ? void 0 : l15.call(t15);
      }]);
  for (let s16 in e7)
    Object.assign(n14, { [s16](t15, ...l15) {
      let i11 = e7[s16];
      for (let o17 of i11) {
        if ((t15 instanceof Event || (t15 == null ? void 0 : t15.nativeEvent) instanceof Event) && t15.defaultPrevented)
          return;
        o17(t15, ...l15);
      }
    } });
  return n14;
}
function D(...r14) {
  var a15;
  if (r14.length === 0)
    return {};
  if (r14.length === 1)
    return r14[0];
  let n14 = {}, e7 = {};
  for (let s16 of r14)
    for (let t15 in s16)
      t15.startsWith("on") && typeof s16[t15] == "function" ? ((a15 = e7[t15]) != null || (e7[t15] = []), e7[t15].push(s16[t15])) : n14[t15] = s16[t15];
  for (let s16 in e7)
    Object.assign(n14, { [s16](...t15) {
      let l15 = e7[s16];
      for (let i11 of l15)
        i11 == null || i11(...t15);
    } });
  return n14;
}
function I(r14) {
  var n14;
  return Object.assign((0, import_react42.forwardRef)(r14), { displayName: (n14 = r14.displayName) != null ? n14 : r14.name });
}
function m2(r14) {
  let n14 = Object.assign({}, r14);
  for (let e7 in n14)
    n14[e7] === void 0 && delete n14[e7];
  return n14;
}
function h(r14, n14 = []) {
  let e7 = Object.assign({}, r14);
  for (let a15 of n14)
    a15 in e7 && delete e7[a15];
  return e7;
}

// node_modules/@headlessui/react/dist/components/button/button.js
var v2 = "button";
function E3(a15, u16) {
  var p8;
  let l15 = a3(), { disabled: e7 = l15 || false, autoFocus: t15 = false, ...o17 } = a15, { isFocusVisible: r14, focusProps: i11 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: t15 }), { isHovered: s16, hoverProps: T12 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e7 }), { pressed: n14, pressProps: f21 } = w({ disabled: e7 }), m13 = D({ ref: u16, type: (p8 = o17.type) != null ? p8 : "button", disabled: e7 || void 0, autoFocus: t15 }, i11, T12, f21), d15 = (0, import_react43.useMemo)(() => ({ disabled: e7, hover: s16, focus: r14, active: n14, autofocus: t15 }), [e7, s16, r14, n14, t15]);
  return H({ ourProps: m13, theirProps: o17, slot: d15, defaultTag: v2, name: "Button" });
}
var h2 = I(E3);

// node_modules/@headlessui/react/dist/components/checkbox/checkbox.js
var import_react51 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-controllable.js
var import_react44 = __toESM(require_react(), 1);
function T(l15, r14, c13) {
  let [i11, s16] = (0, import_react44.useState)(c13), e7 = l15 !== void 0, t15 = (0, import_react44.useRef)(e7), u16 = (0, import_react44.useRef)(false), d15 = (0, import_react44.useRef)(false);
  return e7 && !t15.current && !u16.current ? (u16.current = true, t15.current = e7, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e7 && t15.current && !d15.current && (d15.current = true, t15.current = e7, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e7 ? l15 : i11, o4((n14) => (e7 || s16(n14), r14 == null ? void 0 : r14(n14)))];
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react45 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/form-fields.js
var import_react46 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/utils/form.js
function e2(i11 = {}, s16 = null, t15 = []) {
  for (let [r14, n14] of Object.entries(i11))
    o6(t15, f3(s16, r14), n14);
  return t15;
}
function f3(i11, s16) {
  return i11 ? i11 + "[" + s16 + "]" : s16;
}
function o6(i11, s16, t15) {
  if (Array.isArray(t15))
    for (let [r14, n14] of t15.entries())
      o6(i11, f3(s16, r14.toString()), n14);
  else
    t15 instanceof Date ? i11.push([s16, t15.toISOString()]) : typeof t15 == "boolean" ? i11.push([s16, t15 ? "1" : "0"]) : typeof t15 == "string" ? i11.push([s16, t15]) : typeof t15 == "number" ? i11.push([s16, `${t15}`]) : t15 == null ? i11.push([s16, ""]) : e2(t15, s16, i11);
}
function p2(i11) {
  var t15, r14;
  let s16 = (t15 = i11 == null ? void 0 : i11.form) != null ? t15 : i11.closest("form");
  if (s16) {
    for (let n14 of s16.elements)
      if (n14 !== i11 && (n14.tagName === "INPUT" && n14.type === "submit" || n14.tagName === "BUTTON" && n14.type === "submit" || n14.nodeName === "INPUT" && n14.type === "image")) {
        n14.click();
        return;
      }
    (r14 = s16.requestSubmit) == null || r14.call(s16);
  }
}

// node_modules/@headlessui/react/dist/internal/hidden.js
var a4 = "div";
var s4 = ((e7) => (e7[e7.None = 1] = "None", e7[e7.Focusable = 2] = "Focusable", e7[e7.Hidden = 4] = "Hidden", e7))(s4 || {});
function l2(t15, r14) {
  var n14;
  let { features: d15 = 1, ...e7 } = t15, o17 = { ref: r14, "aria-hidden": (d15 & 2) === 2 ? true : (n14 = e7["aria-hidden"]) != null ? n14 : void 0, hidden: (d15 & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(d15 & 4) === 4 && (d15 & 2) !== 2 && { display: "none" } } };
  return H({ ourProps: o17, theirProps: e7, slot: {}, defaultTag: a4, name: "Hidden" });
}
var T2 = I(l2);

// node_modules/@headlessui/react/dist/internal/form-fields.js
var f4 = (0, import_react46.createContext)(null);
function W(t15) {
  let [e7, r14] = (0, import_react46.useState)(null);
  return import_react46.default.createElement(f4.Provider, { value: { target: e7 } }, t15.children, import_react46.default.createElement(T2, { features: s4.Hidden, ref: r14 }));
}
function c2({ children: t15 }) {
  let e7 = (0, import_react46.useContext)(f4);
  if (!e7)
    return import_react46.default.createElement(import_react46.default.Fragment, null, t15);
  let { target: r14 } = e7;
  return r14 ? (0, import_react_dom.createPortal)(import_react46.default.createElement(import_react46.default.Fragment, null, t15), r14) : null;
}
function j2({ data: t15, form: e7, disabled: r14, onReset: n14, overrides: F6 }) {
  let [i11, a15] = (0, import_react46.useState)(null), p8 = p();
  return (0, import_react46.useEffect)(() => {
    if (n14 && i11)
      return p8.addEventListener(i11, "reset", n14);
  }, [i11, e7, n14]), import_react46.default.createElement(c2, null, import_react46.default.createElement(C, { setForm: a15, formId: e7 }), e2(t15).map(([s16, v7]) => import_react46.default.createElement(T2, { features: s4.Hidden, ...m2({ key: s16, as: "input", type: "hidden", hidden: true, readOnly: true, form: e7, disabled: r14, name: s16, value: v7, ...F6 }) })));
}
function C({ setForm: t15, formId: e7 }) {
  return (0, import_react46.useEffect)(() => {
    if (e7) {
      let r14 = document.getElementById(e7);
      r14 && t15(r14);
    }
  }, [t15, e7]), e7 ? null : import_react46.default.createElement(T2, { features: s4.Hidden, as: "input", type: "hidden", hidden: true, readOnly: true, ref: (r14) => {
    if (!r14)
      return;
    let n14 = r14.closest("form");
    n14 && t15(n14);
  } });
}

// node_modules/@headlessui/react/dist/internal/id.js
var import_react47 = __toESM(require_react(), 1);
var e3 = (0, import_react47.createContext)(void 0);
function u4() {
  return (0, import_react47.useContext)(e3);
}
function f5({ id: t15, children: r14 }) {
  return import_react47.default.createElement(e3.Provider, { value: t15 }, r14);
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r5(n14) {
  let e7 = n14.parentElement, l15 = null;
  for (; e7 && !(e7 instanceof HTMLFieldSetElement); )
    e7 instanceof HTMLLegendElement && (l15 = e7), e7 = e7.parentElement;
  let t15 = (e7 == null ? void 0 : e7.getAttribute("disabled")) === "";
  return t15 && i4(l15) ? false : t15;
}
function i4(n14) {
  if (!n14)
    return false;
  let e7 = n14.previousElementSibling;
  for (; e7 !== null; ) {
    if (e7 instanceof HTMLLegendElement)
      return false;
    e7 = e7.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react49 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react48 = __toESM(require_react(), 1);
var u5 = Symbol();
function T3(t15, n14 = true) {
  return Object.assign(t15, { [u5]: n14 });
}
function y(...t15) {
  let n14 = (0, import_react48.useRef)(t15);
  (0, import_react48.useEffect)(() => {
    n14.current = t15;
  }, [t15]);
  let c13 = o4((e7) => {
    for (let o17 of n14.current)
      o17 != null && (typeof o17 == "function" ? o17(e7) : o17.current = e7);
  });
  return t15.every((e7) => e7 == null || (e7 == null ? void 0 : e7[u5])) ? void 0 : c13;
}

// node_modules/@headlessui/react/dist/components/description/description.js
var a5 = (0, import_react49.createContext)(null);
a5.displayName = "DescriptionContext";
function f6() {
  let r14 = (0, import_react49.useContext)(a5);
  if (r14 === null) {
    let e7 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(e7, f6), e7;
  }
  return r14;
}
function G() {
  var r14, e7;
  return (e7 = (r14 = (0, import_react49.useContext)(a5)) == null ? void 0 : r14.value) != null ? e7 : void 0;
}
function U2() {
  let [r14, e7] = (0, import_react49.useState)([]);
  return [r14.length > 0 ? r14.join(" ") : void 0, (0, import_react49.useMemo)(() => function(t15) {
    let i11 = o4((n14) => (e7((s16) => [...s16, n14]), () => e7((s16) => {
      let o17 = s16.slice(), p8 = o17.indexOf(n14);
      return p8 !== -1 && o17.splice(p8, 1), o17;
    }))), l15 = (0, import_react49.useMemo)(() => ({ register: i11, slot: t15.slot, name: t15.name, props: t15.props, value: t15.value }), [i11, t15.slot, t15.name, t15.props, t15.value]);
    return import_react49.default.createElement(a5.Provider, { value: l15 }, t15.children);
  }, [e7])];
}
var S2 = "p";
function C2(r14, e7) {
  let d15 = (0, import_react45.useId)(), t15 = a3(), { id: i11 = `headlessui-description-${d15}`, ...l15 } = r14, n14 = f6(), s16 = y(e7);
  n(() => n14.register(i11), [i11, n14.register]);
  let o17 = t15 || false, p8 = (0, import_react49.useMemo)(() => ({ ...n14.slot, disabled: o17 }), [n14.slot, o17]), D9 = { ref: s16, ...n14.props, id: i11 };
  return H({ ourProps: D9, theirProps: l15, slot: p8, defaultTag: S2, name: n14.name || "Description" });
}
var _ = I(C2);
var w3 = Object.assign(_, {});

// node_modules/@headlessui/react/dist/components/keyboard.js
var o8 = ((r14) => (r14.Space = " ", r14.Enter = "Enter", r14.Escape = "Escape", r14.Backspace = "Backspace", r14.Delete = "Delete", r14.ArrowLeft = "ArrowLeft", r14.ArrowUp = "ArrowUp", r14.ArrowRight = "ArrowRight", r14.ArrowDown = "ArrowDown", r14.Home = "Home", r14.End = "End", r14.PageUp = "PageUp", r14.PageDown = "PageDown", r14.Tab = "Tab", r14))(o8 || {});

// node_modules/@headlessui/react/dist/components/label/label.js
var import_react50 = __toESM(require_react(), 1);
var c4 = (0, import_react50.createContext)(null);
c4.displayName = "LabelContext";
function P4() {
  let r14 = (0, import_react50.useContext)(c4);
  if (r14 === null) {
    let l15 = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(l15, P4), l15;
  }
  return r14;
}
function I2(r14) {
  var a15, e7, o17;
  let l15 = (e7 = (a15 = (0, import_react50.useContext)(c4)) == null ? void 0 : a15.value) != null ? e7 : void 0;
  return ((o17 = r14 == null ? void 0 : r14.length) != null ? o17 : 0) > 0 ? [l15, ...r14].filter(Boolean).join(" ") : l15;
}
function z({ inherit: r14 = false } = {}) {
  let l15 = I2(), [a15, e7] = (0, import_react50.useState)([]), o17 = r14 ? [l15, ...a15].filter(Boolean) : a15;
  return [o17.length > 0 ? o17.join(" ") : void 0, (0, import_react50.useMemo)(() => function(t15) {
    let s16 = o4((i11) => (e7((p8) => [...p8, i11]), () => e7((p8) => {
      let u16 = p8.slice(), d15 = u16.indexOf(i11);
      return d15 !== -1 && u16.splice(d15, 1), u16;
    }))), m13 = (0, import_react50.useMemo)(() => ({ register: s16, slot: t15.slot, name: t15.name, props: t15.props, value: t15.value }), [s16, t15.slot, t15.name, t15.props, t15.value]);
    return import_react50.default.createElement(c4.Provider, { value: m13 }, t15.children);
  }, [e7])];
}
var N2 = "label";
function G2(r14, l15) {
  var y9;
  let a15 = (0, import_react45.useId)(), e7 = P4(), o17 = u4(), g7 = a3(), { id: t15 = `headlessui-label-${a15}`, htmlFor: s16 = o17 != null ? o17 : (y9 = e7.props) == null ? void 0 : y9.htmlFor, passive: m13 = false, ...i11 } = r14, p8 = y(l15);
  n(() => e7.register(t15), [t15, e7.register]);
  let u16 = o4((L9) => {
    let b7 = L9.currentTarget;
    if (b7 instanceof HTMLLabelElement && L9.preventDefault(), e7.props && "onClick" in e7.props && typeof e7.props.onClick == "function" && e7.props.onClick(L9), b7 instanceof HTMLLabelElement) {
      let n14 = document.getElementById(b7.htmlFor);
      if (n14) {
        let E12 = n14.getAttribute("disabled");
        if (E12 === "true" || E12 === "")
          return;
        let x6 = n14.getAttribute("aria-disabled");
        if (x6 === "true" || x6 === "")
          return;
        (n14 instanceof HTMLInputElement && (n14.type === "radio" || n14.type === "checkbox") || n14.role === "radio" || n14.role === "checkbox" || n14.role === "switch") && n14.click(), n14.focus({ preventScroll: true });
      }
    }
  }), d15 = g7 || false, C7 = (0, import_react50.useMemo)(() => ({ ...e7.slot, disabled: d15 }), [e7.slot, d15]), f21 = { ref: p8, ...e7.props, id: t15, htmlFor: s16, onClick: u16 };
  return m13 && ("onClick" in f21 && (delete f21.htmlFor, delete f21.onClick), "onClick" in i11 && delete i11.onClick), H({ ourProps: f21, theirProps: i11, slot: C7, defaultTag: s16 ? N2 : "div", name: e7.name || "Label" });
}
var U3 = I(G2);
var K = Object.assign(U3, {});

// node_modules/@headlessui/react/dist/components/checkbox/checkbox.js
var se = "span";
function le(T12, h7) {
  let C7 = (0, import_react45.useId)(), k4 = u4(), x6 = a3(), { id: g7 = k4 || `headlessui-checkbox-${C7}`, disabled: o17 = x6 || false, autoFocus: l15 = false, checked: E12, defaultChecked: i11 = false, onChange: v7, name: d15, value: P7, form: D9, indeterminate: a15 = false, ...R8 } = T12, [r14, t15] = T(E12, v7, i11), A6 = I2(), F6 = G(), K4 = p(), [p8, c13] = (0, import_react51.useState)(false), m13 = o4(() => {
    c13(true), t15 == null || t15(!r14), K4.nextFrame(() => {
      c13(false);
    });
  }), _7 = o4((e7) => {
    if (r5(e7.currentTarget))
      return e7.preventDefault();
    e7.preventDefault(), m13();
  }), H10 = o4((e7) => {
    e7.key === o8.Space ? (e7.preventDefault(), m13()) : e7.key === o8.Enter && p2(e7.currentTarget);
  }), B4 = o4((e7) => e7.preventDefault()), { isFocusVisible: b7, focusProps: L9 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: l15 }), { isHovered: u16, hoverProps: I5 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: o17 }), { pressed: f21, pressProps: M7 } = w({ disabled: o17 }), U6 = D({ ref: h7, id: g7, role: "checkbox", "aria-checked": a15 ? "mixed" : r14 ? "true" : "false", "aria-labelledby": A6, "aria-describedby": F6, "aria-disabled": o17 ? true : void 0, indeterminate: a15 ? "true" : void 0, tabIndex: 0, onKeyUp: o17 ? void 0 : H10, onKeyPress: o17 ? void 0 : B4, onClick: o17 ? void 0 : _7 }, L9, I5, M7), O3 = (0, import_react51.useMemo)(() => ({ checked: r14, disabled: o17, hover: u16, focus: b7, active: f21, indeterminate: a15, changing: p8, autofocus: l15 }), [r14, a15, o17, u16, b7, f21, p8, l15]), X3 = (0, import_react51.useCallback)(() => t15 == null ? void 0 : t15(i11), [t15]);
  return import_react51.default.createElement(import_react51.default.Fragment, null, d15 != null && import_react51.default.createElement(j2, { disabled: o17, data: { [d15]: P7 || "on" }, overrides: { type: "checkbox", checked: r14 }, form: D9, onReset: X3 }), H({ ourProps: U6, theirProps: R8, slot: O3, defaultTag: se, name: "Checkbox" }));
}
var ve = I(le);

// node_modules/@headlessui/react/dist/components/close-button/close-button.js
var import_react53 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/close-provider.js
var import_react52 = __toESM(require_react(), 1);
var e4 = (0, import_react52.createContext)(() => {
});
function l4() {
  return (0, import_react52.useContext)(e4);
}
function u7({ value: o17, children: t15 }) {
  return import_react52.default.createElement(e4.Provider, { value: o17 }, t15);
}

// node_modules/@headlessui/react/dist/components/close-button/close-button.js
function l5(t15, e7) {
  let o17 = l4();
  return import_react53.default.createElement(h2, { ref: e7, ...D({ onClick: o17 }, t15) });
}
var y2 = I(l5);

// node_modules/@tanstack/react-virtual/dist/esm/index.js
var React = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());

// node_modules/@tanstack/virtual-core/dist/esm/utils.js
function memo(getDeps, fn, opts) {
  let deps = opts.initialDeps ?? [];
  let result;
  return () => {
    var _a, _b, _c, _d;
    let depTime;
    if (opts.key && ((_a = opts.debug) == null ? void 0 : _a.call(opts)))
      depTime = Date.now();
    const newDeps = getDeps();
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index3) => deps[index3] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    let resultTime;
    if (opts.key && ((_b = opts.debug) == null ? void 0 : _b.call(opts)))
      resultTime = Date.now();
    result = fn(...newDeps);
    if (opts.key && ((_c = opts.debug) == null ? void 0 : _c.call(opts))) {
      const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
      const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
      const resultFpsPercentage = resultEndTime / 16;
      const pad = (str, num) => {
        str = String(str);
        while (str.length < num) {
          str = " " + str;
        }
        return str;
      };
      console.info(
        `%c⏱ ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * resultFpsPercentage, 120)
        )}deg 100% 31%);`,
        opts == null ? void 0 : opts.key
      );
    }
    (_d = opts == null ? void 0 : opts.onChange) == null ? void 0 : _d.call(opts, result);
    return result;
  };
}
function notUndefined(value, msg) {
  if (value === void 0) {
    throw new Error(`Unexpected undefined${msg ? `: ${msg}` : ""}`);
  } else {
    return value;
  }
}
var approxEqual = (a15, b7) => Math.abs(a15 - b7) < 1;
var debounce = (fn, ms) => {
  let timeoutId2;
  return function(...args) {
    clearTimeout(timeoutId2);
    timeoutId2 = setTimeout(() => fn.apply(this, args), ms);
  };
};

// node_modules/@tanstack/virtual-core/dist/esm/index.js
var defaultKeyExtractor = (index3) => index3;
var defaultRangeExtractor = (range) => {
  const start = Math.max(range.startIndex - range.overscan, 0);
  const end = Math.min(range.endIndex + range.overscan, range.count - 1);
  const arr = [];
  for (let i11 = start; i11 <= end; i11++) {
    arr.push(i11);
  }
  return arr;
};
var observeElementRect = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const handler = (rect) => {
    const { width, height } = rect;
    cb({ width: Math.round(width), height: Math.round(height) });
  };
  handler(element.getBoundingClientRect());
  if (typeof ResizeObserver === "undefined") {
    return () => {
    };
  }
  const observer = new ResizeObserver((entries) => {
    const entry = entries[0];
    if (entry == null ? void 0 : entry.borderBoxSize) {
      const box = entry.borderBoxSize[0];
      if (box) {
        handler({ width: box.inlineSize, height: box.blockSize });
        return;
      }
    }
    handler(element.getBoundingClientRect());
  });
  observer.observe(element, { box: "border-box" });
  return () => {
    observer.unobserve(element);
  };
};
var addEventListenerOptions = {
  passive: true
};
var supportsScrollend = typeof window == "undefined" ? true : "onscrollend" in window;
var observeElementOffset = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  let offset4 = 0;
  const fallback = supportsScrollend ? () => void 0 : debounce(() => {
    cb(offset4, false);
  }, instance.options.isScrollingResetDelay);
  const createHandler = (isScrolling) => () => {
    offset4 = element[instance.options.horizontal ? "scrollLeft" : "scrollTop"];
    fallback();
    cb(offset4, isScrolling);
  };
  const handler = createHandler(true);
  const endHandler = createHandler(false);
  endHandler();
  element.addEventListener("scroll", handler, addEventListenerOptions);
  element.addEventListener("scrollend", endHandler, addEventListenerOptions);
  return () => {
    element.removeEventListener("scroll", handler);
    element.removeEventListener("scrollend", endHandler);
  };
};
var measureElement = (element, entry, instance) => {
  if (entry == null ? void 0 : entry.borderBoxSize) {
    const box = entry.borderBoxSize[0];
    if (box) {
      const size4 = Math.round(
        box[instance.options.horizontal ? "inlineSize" : "blockSize"]
      );
      return size4;
    }
  }
  return Math.round(
    element.getBoundingClientRect()[instance.options.horizontal ? "width" : "height"]
  );
};
var elementScroll = (offset4, {
  adjustments = 0,
  behavior
}, instance) => {
  var _a, _b;
  const toOffset = offset4 + adjustments;
  (_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, {
    [instance.options.horizontal ? "left" : "top"]: toOffset,
    behavior
  });
};
var Virtualizer = class {
  constructor(opts) {
    this.unsubs = [];
    this.scrollElement = null;
    this.isScrolling = false;
    this.scrollToIndexTimeoutId = null;
    this.measurementsCache = [];
    this.itemSizeCache = /* @__PURE__ */ new Map();
    this.pendingMeasuredCacheIndexes = [];
    this.scrollDirection = null;
    this.scrollAdjustments = 0;
    this.measureElementCache = /* @__PURE__ */ new Map();
    this.observer = /* @__PURE__ */ (() => {
      let _ro = null;
      const get = () => {
        if (_ro) {
          return _ro;
        } else if (typeof ResizeObserver !== "undefined") {
          return _ro = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
              this._measureElement(entry.target, entry);
            });
          });
        } else {
          return null;
        }
      };
      return {
        disconnect: () => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.disconnect();
        },
        observe: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.observe(target, { box: "border-box" });
        },
        unobserve: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.unobserve(target);
        }
      };
    })();
    this.range = null;
    this.setOptions = (opts2) => {
      Object.entries(opts2).forEach(([key, value]) => {
        if (typeof value === "undefined")
          delete opts2[key];
      });
      this.options = {
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: defaultKeyExtractor,
        rangeExtractor: defaultRangeExtractor,
        onChange: () => {
        },
        measureElement,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        ...opts2
      };
    };
    this.notify = (force, sync) => {
      var _a, _b;
      const { startIndex, endIndex } = this.range ?? {
        startIndex: void 0,
        endIndex: void 0
      };
      const range = this.calculateRange();
      if (force || startIndex !== (range == null ? void 0 : range.startIndex) || endIndex !== (range == null ? void 0 : range.endIndex)) {
        (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, sync);
      }
    };
    this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((d15) => d15());
      this.unsubs = [];
      this.scrollElement = null;
    };
    this._didMount = () => {
      this.measureElementCache.forEach(this.observer.observe);
      return () => {
        this.observer.disconnect();
        this.cleanup();
      };
    };
    this._willUpdate = () => {
      const scrollElement = this.options.getScrollElement();
      if (this.scrollElement !== scrollElement) {
        this.cleanup();
        this.scrollElement = scrollElement;
        this._scrollToOffset(this.scrollOffset, {
          adjustments: void 0,
          behavior: void 0
        });
        this.unsubs.push(
          this.options.observeElementRect(this, (rect) => {
            this.scrollRect = rect;
            this.notify(false, false);
          })
        );
        this.unsubs.push(
          this.options.observeElementOffset(this, (offset4, isScrolling) => {
            this.scrollAdjustments = 0;
            this.scrollDirection = isScrolling ? this.scrollOffset < offset4 ? "forward" : "backward" : null;
            this.scrollOffset = offset4;
            const prevIsScrolling = this.isScrolling;
            this.isScrolling = isScrolling;
            this.notify(prevIsScrolling !== isScrolling, isScrolling);
          })
        );
      }
    };
    this.getSize = () => {
      return this.scrollRect[this.options.horizontal ? "width" : "height"];
    };
    this.getMeasurementOptions = memo(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey
      ],
      (count2, paddingStart, scrollMargin, getItemKey) => {
        this.pendingMeasuredCacheIndexes = [];
        return {
          count: count2,
          paddingStart,
          scrollMargin,
          getItemKey
        };
      },
      {
        key: false
      }
    );
    this.getFurthestMeasurement = (measurements, index3) => {
      const furthestMeasurementsFound = /* @__PURE__ */ new Map();
      const furthestMeasurements = /* @__PURE__ */ new Map();
      for (let m13 = index3 - 1; m13 >= 0; m13--) {
        const measurement = measurements[m13];
        if (furthestMeasurementsFound.has(measurement.lane)) {
          continue;
        }
        const previousFurthestMeasurement = furthestMeasurements.get(
          measurement.lane
        );
        if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
          furthestMeasurements.set(measurement.lane, measurement);
        } else if (measurement.end < previousFurthestMeasurement.end) {
          furthestMeasurementsFound.set(measurement.lane, true);
        }
        if (furthestMeasurementsFound.size === this.options.lanes) {
          break;
        }
      }
      return furthestMeasurements.size === this.options.lanes ? Array.from(furthestMeasurements.values()).sort((a15, b7) => {
        if (a15.end === b7.end) {
          return a15.index - b7.index;
        }
        return a15.end - b7.end;
      })[0] : void 0;
    };
    this.getMeasurements = memo(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: count2, paddingStart, scrollMargin, getItemKey }, itemSizeCache) => {
        const min2 = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const measurements = this.measurementsCache.slice(0, min2);
        for (let i11 = min2; i11 < count2; i11++) {
          const key = getItemKey(i11);
          const furthestMeasurement = this.options.lanes === 1 ? measurements[i11 - 1] : this.getFurthestMeasurement(measurements, i11);
          const start = furthestMeasurement ? furthestMeasurement.end + this.options.gap : paddingStart + scrollMargin;
          const measuredSize = itemSizeCache.get(key);
          const size4 = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i11);
          const end = start + size4;
          const lane = furthestMeasurement ? furthestMeasurement.lane : i11 % this.options.lanes;
          measurements[i11] = {
            index: i11,
            start,
            size: size4,
            end,
            key,
            lane
          };
        }
        this.measurementsCache = measurements;
        return measurements;
      },
      {
        key: "getMeasurements",
        debug: () => this.options.debug
      }
    );
    this.calculateRange = memo(
      () => [this.getMeasurements(), this.getSize(), this.scrollOffset],
      (measurements, outerSize, scrollOffset) => {
        return this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
          measurements,
          outerSize,
          scrollOffset
        }) : null;
      },
      {
        key: "calculateRange",
        debug: () => this.options.debug
      }
    );
    this.getIndexes = memo(
      () => [
        this.options.rangeExtractor,
        this.calculateRange(),
        this.options.overscan,
        this.options.count
      ],
      (rangeExtractor, range, overscan, count2) => {
        return range === null ? [] : rangeExtractor({
          startIndex: range.startIndex,
          endIndex: range.endIndex,
          overscan,
          count: count2
        });
      },
      {
        key: "getIndexes",
        debug: () => this.options.debug
      }
    );
    this.indexFromElement = (node) => {
      const attributeName = this.options.indexAttribute;
      const indexStr = node.getAttribute(attributeName);
      if (!indexStr) {
        console.warn(
          `Missing attribute name '${attributeName}={index}' on measured element.`
        );
        return -1;
      }
      return parseInt(indexStr, 10);
    };
    this._measureElement = (node, entry) => {
      const item = this.measurementsCache[this.indexFromElement(node)];
      if (!item || !node.isConnected) {
        this.measureElementCache.forEach((cached, key) => {
          if (cached === node) {
            this.observer.unobserve(node);
            this.measureElementCache.delete(key);
          }
        });
        return;
      }
      const prevNode = this.measureElementCache.get(item.key);
      if (prevNode !== node) {
        if (prevNode) {
          this.observer.unobserve(prevNode);
        }
        this.observer.observe(node);
        this.measureElementCache.set(item.key, node);
      }
      const measuredItemSize = this.options.measureElement(node, entry, this);
      this.resizeItem(item, measuredItemSize);
    };
    this.resizeItem = (item, size4) => {
      const itemSize = this.itemSizeCache.get(item.key) ?? item.size;
      const delta = size4 - itemSize;
      if (delta !== 0) {
        if (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(item, delta, this) : item.start < this.scrollOffset + this.scrollAdjustments) {
          if (this.options.debug) {
            console.info("correction", delta);
          }
          this._scrollToOffset(this.scrollOffset, {
            adjustments: this.scrollAdjustments += delta,
            behavior: void 0
          });
        }
        this.pendingMeasuredCacheIndexes.push(item.index);
        this.itemSizeCache = new Map(this.itemSizeCache.set(item.key, size4));
        this.notify(true, false);
      }
    };
    this.measureElement = (node) => {
      if (!node) {
        return;
      }
      this._measureElement(node, void 0);
    };
    this.getVirtualItems = memo(
      () => [this.getIndexes(), this.getMeasurements()],
      (indexes, measurements) => {
        const virtualItems = [];
        for (let k4 = 0, len = indexes.length; k4 < len; k4++) {
          const i11 = indexes[k4];
          const measurement = measurements[i11];
          virtualItems.push(measurement);
        }
        return virtualItems;
      },
      {
        key: "getIndexes",
        debug: () => this.options.debug
      }
    );
    this.getVirtualItemForOffset = (offset4) => {
      const measurements = this.getMeasurements();
      return notUndefined(
        measurements[findNearestBinarySearch(
          0,
          measurements.length - 1,
          (index3) => notUndefined(measurements[index3]).start,
          offset4
        )]
      );
    };
    this.getOffsetForAlignment = (toOffset, align) => {
      const size4 = this.getSize();
      if (align === "auto") {
        if (toOffset <= this.scrollOffset) {
          align = "start";
        } else if (toOffset >= this.scrollOffset + size4) {
          align = "end";
        } else {
          align = "start";
        }
      }
      if (align === "start") {
        toOffset = toOffset;
      } else if (align === "end") {
        toOffset = toOffset - size4;
      } else if (align === "center") {
        toOffset = toOffset - size4 / 2;
      }
      const scrollSizeProp = this.options.horizontal ? "scrollWidth" : "scrollHeight";
      const scrollSize = this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[scrollSizeProp] : this.scrollElement[scrollSizeProp] : 0;
      const maxOffset = scrollSize - this.getSize();
      return Math.max(Math.min(maxOffset, toOffset), 0);
    };
    this.getOffsetForIndex = (index3, align = "auto") => {
      index3 = Math.max(0, Math.min(index3, this.options.count - 1));
      const measurement = notUndefined(this.getMeasurements()[index3]);
      if (align === "auto") {
        if (measurement.end >= this.scrollOffset + this.getSize() - this.options.scrollPaddingEnd) {
          align = "end";
        } else if (measurement.start <= this.scrollOffset + this.options.scrollPaddingStart) {
          align = "start";
        } else {
          return [this.scrollOffset, align];
        }
      }
      const toOffset = align === "end" ? measurement.end + this.options.scrollPaddingEnd : measurement.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(toOffset, align), align];
    };
    this.isDynamicMode = () => this.measureElementCache.size > 0;
    this.cancelScrollToIndex = () => {
      if (this.scrollToIndexTimeoutId !== null) {
        clearTimeout(this.scrollToIndexTimeoutId);
        this.scrollToIndexTimeoutId = null;
      }
    };
    this.scrollToOffset = (toOffset, { align = "start", behavior } = {}) => {
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getOffsetForAlignment(toOffset, align), {
        adjustments: void 0,
        behavior
      });
    };
    this.scrollToIndex = (index3, { align: initialAlign = "auto", behavior } = {}) => {
      index3 = Math.max(0, Math.min(index3, this.options.count - 1));
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      const [toOffset, align] = this.getOffsetForIndex(index3, initialAlign);
      this._scrollToOffset(toOffset, { adjustments: void 0, behavior });
      if (behavior !== "smooth" && this.isDynamicMode()) {
        this.scrollToIndexTimeoutId = setTimeout(() => {
          this.scrollToIndexTimeoutId = null;
          const elementInDOM = this.measureElementCache.has(
            this.options.getItemKey(index3)
          );
          if (elementInDOM) {
            const [toOffset2] = this.getOffsetForIndex(index3, align);
            if (!approxEqual(toOffset2, this.scrollOffset)) {
              this.scrollToIndex(index3, { align, behavior });
            }
          } else {
            this.scrollToIndex(index3, { align, behavior });
          }
        });
      }
    };
    this.scrollBy = (delta, { behavior } = {}) => {
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.scrollOffset + delta, {
        adjustments: void 0,
        behavior
      });
    };
    this.getTotalSize = () => {
      var _a;
      const measurements = this.getMeasurements();
      let end;
      if (measurements.length === 0) {
        end = this.options.paddingStart;
      } else {
        end = this.options.lanes === 1 ? ((_a = measurements[measurements.length - 1]) == null ? void 0 : _a.end) ?? 0 : Math.max(
          ...measurements.slice(-this.options.lanes).map((m13) => m13.end)
        );
      }
      return end - this.options.scrollMargin + this.options.paddingEnd;
    };
    this._scrollToOffset = (offset4, {
      adjustments,
      behavior
    }) => {
      this.options.scrollToFn(offset4, { behavior, adjustments }, this);
    };
    this.measure = () => {
      var _a, _b;
      this.itemSizeCache = /* @__PURE__ */ new Map();
      (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, false);
    };
    this.setOptions(opts);
    this.scrollRect = this.options.initialRect;
    this.scrollOffset = typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset;
    this.measurementsCache = this.options.initialMeasurementsCache;
    this.measurementsCache.forEach((item) => {
      this.itemSizeCache.set(item.key, item.size);
    });
    this.notify(false, false);
  }
};
var findNearestBinarySearch = (low, high, getCurrentValue, value) => {
  while (low <= high) {
    const middle = (low + high) / 2 | 0;
    const currentValue = getCurrentValue(middle);
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};
function calculateRange({
  measurements,
  outerSize,
  scrollOffset
}) {
  const count2 = measurements.length - 1;
  const getOffset = (index3) => measurements[index3].start;
  const startIndex = findNearestBinarySearch(0, count2, getOffset, scrollOffset);
  let endIndex = startIndex;
  while (endIndex < count2 && measurements[endIndex].end < scrollOffset + outerSize) {
    endIndex++;
  }
  return { startIndex, endIndex };
}

// node_modules/@tanstack/react-virtual/dist/esm/index.js
var useIsomorphicLayoutEffect = typeof document !== "undefined" ? React.useLayoutEffect : React.useEffect;
function useVirtualizerBase(options) {
  const rerender = React.useReducer(() => ({}), {})[1];
  const resolvedOptions = {
    ...options,
    onChange: (instance2, sync) => {
      var _a;
      if (sync) {
        (0, import_react_dom2.flushSync)(rerender);
      } else {
        rerender();
      }
      (_a = options.onChange) == null ? void 0 : _a.call(options, instance2, sync);
    }
  };
  const [instance] = React.useState(
    () => new Virtualizer(resolvedOptions)
  );
  instance.setOptions(resolvedOptions);
  React.useEffect(() => {
    return instance._didMount();
  }, []);
  useIsomorphicLayoutEffect(() => {
    return instance._willUpdate();
  });
  return instance;
}
function useVirtualizer(options) {
  return useVirtualizerBase({
    observeElementRect,
    observeElementOffset,
    scrollToFn: elementScroll,
    ...options
  });
}

// node_modules/@headlessui/react/dist/components/combobox/combobox.js
var import_react76 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-by-comparator.js
var import_react54 = __toESM(require_react(), 1);
function l6(e7, r14) {
  return e7 !== null && r14 !== null && typeof e7 == "object" && typeof r14 == "object" && "id" in e7 && "id" in r14 ? e7.id === r14.id : e7 === r14;
}
function u8(e7 = l6) {
  return (0, import_react54.useCallback)((r14, t15) => {
    if (typeof e7 == "string") {
      let o17 = e7;
      return (r14 == null ? void 0 : r14[o17]) === (t15 == null ? void 0 : t15[o17]);
    }
    return e7(r14, t15);
  }, [e7]);
}

// node_modules/@headlessui/react/dist/hooks/use-element-size.js
var import_react55 = __toESM(require_react(), 1);
function s5(e7) {
  if (e7 === null)
    return { width: 0, height: 0 };
  let { width: n14, height: t15 } = e7.getBoundingClientRect();
  return { width: n14, height: t15 };
}
function f7(e7, n14 = false) {
  let t15 = e7 === null ? null : "current" in e7 ? e7.current : e7, [l15, u16] = (0, import_react55.useReducer)(() => ({}), {}), r14 = (0, import_react55.useMemo)(() => s5(t15), [t15, l15]);
  return n(() => {
    if (!t15)
      return;
    let i11 = new ResizeObserver(u16);
    return i11.observe(t15), () => {
      i11.disconnect();
    };
  }, [t15]), n14 ? { width: `${r14.width}px`, height: `${r14.height}px` } : r14;
}

// node_modules/@headlessui/react/dist/hooks/use-frame-debounce.js
function m5() {
  let e7 = p();
  return o4((o17) => {
    e7.dispose(), e7.nextFrame(o17);
  });
}

// node_modules/@headlessui/react/dist/hooks/use-inert-others.js
var f8 = /* @__PURE__ */ new Map();
var u9 = /* @__PURE__ */ new Map();
function l7(t15) {
  var r14;
  let e7 = (r14 = u9.get(t15)) != null ? r14 : 0;
  return u9.set(t15, e7 + 1), e7 !== 0 ? () => p3(t15) : (f8.set(t15, { "aria-hidden": t15.getAttribute("aria-hidden"), inert: t15.inert }), t15.setAttribute("aria-hidden", "true"), t15.inert = true, () => p3(t15));
}
function p3(t15) {
  var n14;
  let e7 = (n14 = u9.get(t15)) != null ? n14 : 1;
  if (e7 === 1 ? u9.delete(t15) : u9.set(t15, e7 - 1), e7 !== 1)
    return;
  let r14 = f8.get(t15);
  r14 && (r14["aria-hidden"] === null ? t15.removeAttribute("aria-hidden") : t15.setAttribute("aria-hidden", r14["aria-hidden"]), t15.inert = r14.inert, f8.delete(t15));
}
function T6({ allowed: t15, disallowed: e7 } = {}, r14 = true) {
  n(() => {
    var s16, c13;
    if (!r14)
      return;
    let n14 = o2();
    for (let i11 of (s16 = e7 == null ? void 0 : e7()) != null ? s16 : [])
      i11 && n14.add(l7(i11));
    let a15 = (c13 = t15 == null ? void 0 : t15()) != null ? c13 : [];
    for (let i11 of a15) {
      if (!i11)
        continue;
      let d15 = u(i11);
      if (!d15)
        continue;
      let o17 = i11.parentElement;
      for (; o17 && o17 !== d15.body; ) {
        for (let h7 of o17.children)
          a15.some((E12) => h7.contains(E12)) || n14.add(l7(h7));
        o17 = o17.parentElement;
      }
    }
    return n14.dispose;
  }, [r14, t15, e7]);
}

// node_modules/@headlessui/react/dist/hooks/use-on-disappear.js
var import_react56 = __toESM(require_react(), 1);
function m6(n14, l15, s16 = true) {
  let i11 = s3((t15) => {
    let e7 = t15.getBoundingClientRect();
    e7.x === 0 && e7.y === 0 && e7.width === 0 && e7.height === 0 && l15();
  });
  (0, import_react56.useEffect)(() => {
    if (!s16)
      return;
    let t15 = n14 === null ? null : n14 instanceof HTMLElement ? n14 : n14.current;
    if (!t15)
      return;
    let e7 = o2();
    if (typeof ResizeObserver != "undefined") {
      let r14 = new ResizeObserver(() => i11.current(t15));
      r14.observe(t15), e7.add(() => r14.disconnect());
    }
    if (typeof IntersectionObserver != "undefined") {
      let r14 = new IntersectionObserver(() => i11.current(t15));
      r14.observe(t15), e7.add(() => r14.disconnect());
    }
    return () => e7.dispose();
  }, [n14, i11, s16]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react59 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/focus-management.js
var f9 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e7) => `${e7}:not([tabindex='-1'])`).join(",");
var p4 = ["[data-autofocus]"].map((e7) => `${e7}:not([tabindex='-1'])`).join(",");
var F = ((n14) => (n14[n14.First = 1] = "First", n14[n14.Previous = 2] = "Previous", n14[n14.Next = 4] = "Next", n14[n14.Last = 8] = "Last", n14[n14.WrapAround = 16] = "WrapAround", n14[n14.NoScroll = 32] = "NoScroll", n14[n14.AutoFocus = 64] = "AutoFocus", n14))(F || {});
var T7 = ((o17) => (o17[o17.Error = 0] = "Error", o17[o17.Overflow = 1] = "Overflow", o17[o17.Success = 2] = "Success", o17[o17.Underflow = 3] = "Underflow", o17))(T7 || {});
var y3 = ((t15) => (t15[t15.Previous = -1] = "Previous", t15[t15.Next = 1] = "Next", t15))(y3 || {});
function b2(e7 = document.body) {
  return e7 == null ? [] : Array.from(e7.querySelectorAll(f9)).sort((r14, t15) => Math.sign((r14.tabIndex || Number.MAX_SAFE_INTEGER) - (t15.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function S3(e7 = document.body) {
  return e7 == null ? [] : Array.from(e7.querySelectorAll(p4)).sort((r14, t15) => Math.sign((r14.tabIndex || Number.MAX_SAFE_INTEGER) - (t15.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h4 = ((t15) => (t15[t15.Strict = 0] = "Strict", t15[t15.Loose = 1] = "Loose", t15))(h4 || {});
function A2(e7, r14 = 0) {
  var t15;
  return e7 === ((t15 = u(e7)) == null ? void 0 : t15.body) ? false : u2(r14, { [0]() {
    return e7.matches(f9);
  }, [1]() {
    let u16 = e7;
    for (; u16 !== null; ) {
      if (u16.matches(f9))
        return true;
      u16 = u16.parentElement;
    }
    return false;
  } });
}
function G3(e7) {
  let r14 = u(e7);
  o2().nextFrame(() => {
    r14 && !A2(r14.activeElement, 0) && I3(e7);
  });
}
var H3 = ((t15) => (t15[t15.Keyboard = 0] = "Keyboard", t15[t15.Mouse = 1] = "Mouse", t15))(H3 || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e7) => {
  e7.metaKey || e7.altKey || e7.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e7) => {
  e7.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e7.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function I3(e7) {
  e7 == null || e7.focus({ preventScroll: true });
}
var w5 = ["textarea", "input"].join(",");
function O2(e7) {
  var r14, t15;
  return (t15 = (r14 = e7 == null ? void 0 : e7.matches) == null ? void 0 : r14.call(e7, w5)) != null ? t15 : false;
}
function _2(e7, r14 = (t15) => t15) {
  return e7.slice().sort((t15, u16) => {
    let o17 = r14(t15), c13 = r14(u16);
    if (o17 === null || c13 === null)
      return 0;
    let l15 = o17.compareDocumentPosition(c13);
    return l15 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l15 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function j3(e7, r14) {
  return P5(b2(), r14, { relativeTo: e7 });
}
function P5(e7, r14, { sorted: t15 = true, relativeTo: u16 = null, skipElements: o17 = [] } = {}) {
  let c13 = Array.isArray(e7) ? e7.length > 0 ? e7[0].ownerDocument : document : e7.ownerDocument, l15 = Array.isArray(e7) ? t15 ? _2(e7) : e7 : r14 & 64 ? S3(e7) : b2(e7);
  o17.length > 0 && l15.length > 1 && (l15 = l15.filter((s16) => !o17.some((a15) => a15 != null && "current" in a15 ? (a15 == null ? void 0 : a15.current) === s16 : a15 === s16))), u16 = u16 != null ? u16 : c13.activeElement;
  let n14 = (() => {
    if (r14 & 5)
      return 1;
    if (r14 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x6 = (() => {
    if (r14 & 1)
      return 0;
    if (r14 & 2)
      return Math.max(0, l15.indexOf(u16)) - 1;
    if (r14 & 4)
      return Math.max(0, l15.indexOf(u16)) + 1;
    if (r14 & 8)
      return l15.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), M7 = r14 & 32 ? { preventScroll: true } : {}, m13 = 0, d15 = l15.length, i11;
  do {
    if (m13 >= d15 || m13 + d15 <= 0)
      return 0;
    let s16 = x6 + m13;
    if (r14 & 16)
      s16 = (s16 + d15) % d15;
    else {
      if (s16 < 0)
        return 3;
      if (s16 >= d15)
        return 1;
    }
    i11 = l15[s16], i11 == null || i11.focus(M7), m13 += n14;
  } while (i11 !== c13.activeElement);
  return r14 & 6 && O2(i11) && i11.select(), 2;
}

// node_modules/@headlessui/react/dist/utils/platform.js
function t4() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i7() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n8() {
  return t4() || i7();
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react57 = __toESM(require_react(), 1);
function d3(e7, r14, n14) {
  let o17 = s3(r14);
  (0, import_react57.useEffect)(() => {
    function t15(u16) {
      o17.current(u16);
    }
    return document.addEventListener(e7, t15, n14), () => document.removeEventListener(e7, t15, n14);
  }, [e7, n14]);
}

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react58 = __toESM(require_react(), 1);
function s6(e7, r14, n14) {
  let o17 = s3(r14);
  (0, import_react58.useEffect)(() => {
    function t15(i11) {
      o17.current(i11);
    }
    return window.addEventListener(e7, t15, n14), () => window.removeEventListener(e7, t15, n14);
  }, [e7, n14]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function w6(s16, m13, a15 = true) {
  let i11 = (0, import_react59.useRef)(false);
  (0, import_react59.useEffect)(() => {
    requestAnimationFrame(() => {
      i11.current = a15;
    });
  }, [a15]);
  function c13(e7, r14) {
    if (!i11.current || e7.defaultPrevented)
      return;
    let t15 = r14(e7);
    if (t15 === null || !t15.getRootNode().contains(t15) || !t15.isConnected)
      return;
    let E12 = function u16(n14) {
      return typeof n14 == "function" ? u16(n14()) : Array.isArray(n14) || n14 instanceof Set ? n14 : [n14];
    }(s16);
    for (let u16 of E12) {
      if (u16 === null)
        continue;
      let n14 = u16 instanceof HTMLElement ? u16 : u16.current;
      if (n14 != null && n14.contains(t15) || e7.composed && e7.composedPath().includes(n14))
        return;
    }
    return !A2(t15, h4.Loose) && t15.tabIndex !== -1 && e7.preventDefault(), m13(e7, t15);
  }
  let o17 = (0, import_react59.useRef)(null);
  d3("pointerdown", (e7) => {
    var r14, t15;
    i11.current && (o17.current = ((t15 = (r14 = e7.composedPath) == null ? void 0 : r14.call(e7)) == null ? void 0 : t15[0]) || e7.target);
  }, true), d3("mousedown", (e7) => {
    var r14, t15;
    i11.current && (o17.current = ((t15 = (r14 = e7.composedPath) == null ? void 0 : r14.call(e7)) == null ? void 0 : t15[0]) || e7.target);
  }, true), d3("click", (e7) => {
    n8() || o17.current && (c13(e7, () => o17.current), o17.current = null);
  }, true), d3("touchend", (e7) => c13(e7, () => e7.target instanceof HTMLElement ? e7.target : null), true), s6("blur", (e7) => c13(e7, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react60 = __toESM(require_react(), 1);
function n9(...e7) {
  return (0, import_react60.useMemo)(() => u(...e7), [...e7]);
}

// node_modules/@headlessui/react/dist/hooks/use-refocusable-input.js
var import_react62 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react61 = __toESM(require_react(), 1);
function E5(n14, e7, a15, t15) {
  let i11 = s3(a15);
  (0, import_react61.useEffect)(() => {
    n14 = n14 != null ? n14 : window;
    function r14(o17) {
      i11.current(o17);
    }
    return n14.addEventListener(e7, r14, t15), () => n14.removeEventListener(e7, r14, t15);
  }, [n14, e7, t15]);
}

// node_modules/@headlessui/react/dist/hooks/use-refocusable-input.js
function f11(l15) {
  let n14 = (0, import_react62.useRef)({ value: "", selectionStart: null, selectionEnd: null });
  return E5(l15.current, "blur", (e7) => {
    let t15 = e7.target;
    t15 instanceof HTMLInputElement && (n14.current = { value: t15.value, selectionStart: t15.selectionStart, selectionEnd: t15.selectionEnd });
  }), o4(() => {
    let e7 = l15.current;
    if (document.activeElement !== e7 && e7 instanceof HTMLInputElement && e7.isConnected) {
      if (e7.focus({ preventScroll: true }), e7.value !== n14.current.value)
        e7.setSelectionRange(e7.value.length, e7.value.length);
      else {
        let { selectionStart: t15, selectionEnd: u16 } = n14.current;
        t15 !== null && u16 !== null && e7.setSelectionRange(t15, u16);
      }
      n14.current = { value: "", selectionStart: null, selectionEnd: null };
    }
  });
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react63 = __toESM(require_react(), 1);
function i8(t15) {
  var n14;
  if (t15.type)
    return t15.type;
  let e7 = (n14 = t15.as) != null ? n14 : "button";
  if (typeof e7 == "string" && e7.toLowerCase() === "button")
    return "button";
}
function T8(t15, e7) {
  let [n14, u16] = (0, import_react63.useState)(() => i8(t15));
  return n(() => {
    u16(i8(t15));
  }, [t15.type, t15.as]), n(() => {
    n14 || e7.current && e7.current instanceof HTMLButtonElement && !e7.current.hasAttribute("type") && u16("button");
  }, [n14, e7]), n14;
}

// node_modules/@headlessui/react/dist/hooks/use-store.js
var import_react64 = __toESM(require_react(), 1);
function o12(t15) {
  return (0, import_react64.useSyncExternalStore)(t15.subscribe, t15.getSnapshot, t15.getSnapshot);
}

// node_modules/@headlessui/react/dist/utils/store.js
function a6(o17, r14) {
  let t15 = o17(), n14 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t15;
  }, subscribe(e7) {
    return n14.add(e7), () => n14.delete(e7);
  }, dispatch(e7, ...s16) {
    let i11 = r14[e7].call(t15, ...s16);
    i11 && (t15 = i11, n14.forEach((c13) => c13()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function d7() {
  let r14;
  return { before({ doc: e7 }) {
    var l15;
    let o17 = e7.documentElement, t15 = (l15 = e7.defaultView) != null ? l15 : window;
    r14 = Math.max(0, t15.innerWidth - o17.clientWidth);
  }, after({ doc: e7, d: o17 }) {
    let t15 = e7.documentElement, l15 = Math.max(0, t15.clientWidth - t15.offsetWidth), n14 = Math.max(0, r14 - l15);
    o17.style(t15, "paddingRight", `${n14}px`);
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function d8() {
  return t4() ? { before({ doc: r14, d: n14, meta: c13 }) {
    function o17(a15) {
      return c13.containers.flatMap((l15) => l15()).some((l15) => l15.contains(a15));
    }
    n14.microTask(() => {
      var s16;
      if (window.getComputedStyle(r14.documentElement).scrollBehavior !== "auto") {
        let t15 = o2();
        t15.style(r14.documentElement, "scrollBehavior", "auto"), n14.add(() => n14.microTask(() => t15.dispose()));
      }
      let a15 = (s16 = window.scrollY) != null ? s16 : window.pageYOffset, l15 = null;
      n14.addEventListener(r14, "click", (t15) => {
        if (t15.target instanceof HTMLElement)
          try {
            let e7 = t15.target.closest("a");
            if (!e7)
              return;
            let { hash: f21 } = new URL(e7.href), i11 = r14.querySelector(f21);
            i11 && !o17(i11) && (l15 = i11);
          } catch {
          }
      }, true), n14.addEventListener(r14, "touchstart", (t15) => {
        if (t15.target instanceof HTMLElement)
          if (o17(t15.target)) {
            let e7 = t15.target;
            for (; e7.parentElement && o17(e7.parentElement); )
              e7 = e7.parentElement;
            n14.style(e7, "overscrollBehavior", "contain");
          } else
            n14.style(t15.target, "touchAction", "none");
      }), n14.addEventListener(r14, "touchmove", (t15) => {
        if (t15.target instanceof HTMLElement) {
          if (t15.target.tagName === "INPUT")
            return;
          if (o17(t15.target)) {
            let e7 = t15.target;
            for (; e7.parentElement && e7.dataset.headlessuiPortal !== "" && !(e7.scrollHeight > e7.clientHeight || e7.scrollWidth > e7.clientWidth); )
              e7 = e7.parentElement;
            e7.dataset.headlessuiPortal === "" && t15.preventDefault();
          } else
            t15.preventDefault();
        }
      }, { passive: false }), n14.add(() => {
        var e7;
        let t15 = (e7 = window.scrollY) != null ? e7 : window.pageYOffset;
        a15 !== t15 && window.scrollTo(0, a15), l15 && l15.isConnected && (l15.scrollIntoView({ block: "nearest" }), l15 = null);
      });
    });
  } } : {};
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function r8() {
  return { before({ doc: e7, d: o17 }) {
    o17.style(e7.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function m8(e7) {
  let n14 = {};
  for (let t15 of e7)
    Object.assign(n14, t15(n14));
  return n14;
}
var a7 = a6(() => /* @__PURE__ */ new Map(), { PUSH(e7, n14) {
  var o17;
  let t15 = (o17 = this.get(e7)) != null ? o17 : { doc: e7, count: 0, d: o2(), meta: /* @__PURE__ */ new Set() };
  return t15.count++, t15.meta.add(n14), this.set(e7, t15), this;
}, POP(e7, n14) {
  let t15 = this.get(e7);
  return t15 && (t15.count--, t15.meta.delete(n14)), this;
}, SCROLL_PREVENT({ doc: e7, d: n14, meta: t15 }) {
  let o17 = { doc: e7, d: n14, meta: m8(t15) }, c13 = [d8(), d7(), r8()];
  c13.forEach(({ before: r14 }) => r14 == null ? void 0 : r14(o17)), c13.forEach(({ after: r14 }) => r14 == null ? void 0 : r14(o17));
}, SCROLL_ALLOW({ d: e7 }) {
  e7.dispose();
}, TEARDOWN({ doc: e7 }) {
  this.delete(e7);
} });
a7.subscribe(() => {
  let e7 = a7.getSnapshot(), n14 = /* @__PURE__ */ new Map();
  for (let [t15] of e7)
    n14.set(t15, t15.documentElement.style.overflow);
  for (let t15 of e7.values()) {
    let o17 = n14.get(t15.doc) === "hidden", c13 = t15.count !== 0;
    (c13 && !o17 || !c13 && o17) && a7.dispatch(t15.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t15), t15.count === 0 && a7.dispatch("TEARDOWN", t15);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function a8(e7, r14, n14 = () => ({ containers: [] })) {
  let f21 = o12(a7), o17 = e7 ? f21.get(e7) : void 0, i11 = o17 ? o17.count > 0 : false;
  return n(() => {
    if (!(!e7 || !r14))
      return a7.dispatch("PUSH", e7, n14), () => a7.dispatch("POP", e7, n14);
  }, [r14, e7]), i11;
}

// node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js
function u10(e7, n14, c13 = () => [document.body]) {
  a8(e7, n14, (t15) => {
    var o17;
    return { containers: [...(o17 = t15.containers) != null ? o17 : [], c13] };
  });
}

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var import_react65 = __toESM(require_react(), 1);
function t6(e7) {
  return [e7.screenX, e7.screenY];
}
function u11() {
  let e7 = (0, import_react65.useRef)([-1, -1]);
  return { wasMoved(r14) {
    let n14 = t6(r14);
    return e7.current[0] === n14[0] && e7.current[1] === n14[1] ? false : (e7.current = n14, true);
  }, update(r14) {
    e7.current = t6(r14);
  } };
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react66 = __toESM(require_react(), 1);
function F2({ container: e7, accept: t15, walk: r14, enabled: c13 = true }) {
  let o17 = (0, import_react66.useRef)(t15), l15 = (0, import_react66.useRef)(r14);
  (0, import_react66.useEffect)(() => {
    o17.current = t15, l15.current = r14;
  }, [t15, r14]), n(() => {
    if (!e7 || !c13)
      return;
    let n14 = u(e7);
    if (!n14)
      return;
    let f21 = o17.current, p8 = l15.current, d15 = Object.assign((i11) => f21(i11), { acceptNode: f21 }), u16 = n14.createTreeWalker(e7, NodeFilter.SHOW_ELEMENT, d15, false);
    for (; u16.nextNode(); )
      p8(u16.currentNode);
  }, [e7, c13, o17, l15]);
}

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react67 = __toESM(require_react(), 1);
function m10(u16, t15) {
  let e7 = (0, import_react67.useRef)([]), r14 = o4(u16);
  (0, import_react67.useEffect)(() => {
    let o17 = [...e7.current];
    for (let [a15, l15] of t15.entries())
      if (e7.current[a15] !== l15) {
        let n14 = r14(t15, o17);
        return e7.current = t15, n14;
      }
  }, [r14, ...t15]);
}

// node_modules/@floating-ui/react/dist/floating-ui.react.mjs
var React3 = __toESM(require_react(), 1);
var import_react69 = __toESM(require_react(), 1);

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle2(element);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}

// node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs
function getPlatform() {
  const uaData = navigator.userAgentData;
  if (uaData != null && uaData.platform) {
    return uaData.platform;
  }
  return navigator.platform;
}
function getUserAgent() {
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    return uaData.brands.map((_ref) => {
      let {
        brand,
        version
      } = _ref;
      return brand + "/" + version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isSafari() {
  return /apple/i.test(navigator.vendor);
}
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var alignments = ["start", "end"];
var placements = sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v7) => ({
  x: v7,
  y: v7
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt2 = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt2;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x: x6,
    y: y9,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y9,
    left: x6,
    right: x6 + width,
    bottom: y9 + height,
    x: x6,
    y: y9
  };
}

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x: x6,
    y: y9
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i11 = 0; i11 < validMiddleware.length; i11++) {
    const {
      name,
      fn
    } = validMiddleware[i11];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x: x6,
      y: y9,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x6 = nextX != null ? nextX : x6;
    y9 = nextY != null ? nextY : y9;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x: x6,
          y: y9
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i11 = -1;
    }
  }
  return {
    x: x6,
    y: y9,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x: x6,
    y: y9,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x: x6,
    y: y9,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d15) => d15.overflows[0] <= 0).sort((a15, b7) => a15.overflows[1] - b7.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d15) => [d15.placement, d15.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a15, b7) => a15[1] - b7[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x: x6,
        y: y9,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x6 + diffCoords.x,
        y: y9 + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x: x6,
        y: y9,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x7,
              y: y10
            } = _ref;
            return {
              x: x7,
              y: y10
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x: x6,
        y: y9
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x6,
          y: limitedCoords.y - y9
        }
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (isYAxis) {
        availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
      } else {
        availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $: $5
  } = getCssDimensions(domElement);
  let x6 = ($5 ? round(rect.width) : rect.width) / width;
  let y9 = ($5 ? round(rect.height) : rect.height) / height;
  if (!x6 || !Number.isFinite(x6)) {
    x6 = 1;
  }
  if (!y9 || !Number.isFinite(y9)) {
    y9 = 1;
  }
  return {
    x: x6,
    y: y9
  };
}
var noOffsets = createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x6 = (clientRect.left + visualOffsets.x) / scale.x;
  let y9 = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = currentWin.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x6 *= iframeScale.x;
      y9 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x6 += left;
      y9 += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = currentWin.frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x: x6,
    y: y9
  });
}
var topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(element) {
  return topLayerSelectors.some((selector) => {
    try {
      return element.matches(selector);
    } catch (e7) {
      return false;
    }
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x6 = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y9 = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x6 += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x: x6,
    y: y9
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x6 = 0;
  let y9 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x6 = visualViewport.offsetLeft;
      y9 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x6,
    y: y9
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x6 = left * scale.x;
  const y9 = top * scale.y;
  return {
    width,
    height,
    x: x6,
    y: y9
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const x6 = rect.left + scroll.scrollLeft - offsets.x;
  const y9 = rect.top + scroll.scrollTop - offsets.y;
  return {
    x: x6,
    y: y9,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId2;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId2);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId2 = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e7) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var detectOverflow2 = detectOverflow;
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var React2 = __toESM(require_react(), 1);
var import_react68 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);
var index = typeof document !== "undefined" ? import_react68.useLayoutEffect : import_react68.useEffect;
function deepEqual(a15, b7) {
  if (a15 === b7) {
    return true;
  }
  if (typeof a15 !== typeof b7) {
    return false;
  }
  if (typeof a15 === "function" && a15.toString() === b7.toString()) {
    return true;
  }
  let length;
  let i11;
  let keys;
  if (a15 && b7 && typeof a15 === "object") {
    if (Array.isArray(a15)) {
      length = a15.length;
      if (length !== b7.length)
        return false;
      for (i11 = length; i11-- !== 0; ) {
        if (!deepEqual(a15[i11], b7[i11])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a15);
    length = keys.length;
    if (length !== Object.keys(b7).length) {
      return false;
    }
    for (i11 = length; i11-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b7, keys[i11])) {
        return false;
      }
    }
    for (i11 = length; i11-- !== 0; ) {
      const key = keys[i11];
      if (key === "_owner" && a15.$$typeof) {
        continue;
      }
      if (!deepEqual(a15[key], b7[key])) {
        return false;
      }
    }
    return true;
  }
  return a15 !== a15 && b7 !== b7;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React2.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React2.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React2.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React2.useState(null);
  const [_floating, _setFloating] = React2.useState(null);
  const setReference = React2.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React2.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React2.useRef(null);
  const floatingRef = React2.useRef(null);
  const dataRef = React2.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const update = React2.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React2.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl)
      referenceRef.current = referenceEl;
    if (floatingEl)
      floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React2.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React2.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React2.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x6 = roundByDPR(elements.floating, data.x);
    const y9 = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x6 + "px, " + y9 + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x6,
      top: y9
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React2.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
var offset3 = (options, deps) => ({
  ...offset2(options),
  options: [options, deps]
});
var shift3 = (options, deps) => ({
  ...shift2(options),
  options: [options, deps]
});
var flip3 = (options, deps) => ({
  ...flip2(options),
  options: [options, deps]
});
var size3 = (options, deps) => ({
  ...size2(options),
  options: [options, deps]
});

// node_modules/tabbable/dist/index.esm.js
var candidateSelectors = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
var candidateSelector = candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function(element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};
var focusableCandidateSelector = candidateSelectors.concat("iframe").join(",");

// node_modules/@floating-ui/react/dist/floating-ui.react.mjs
var import_react_dom5 = __toESM(require_react_dom(), 1);
function useMergeRefs(refs) {
  return React3.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (value) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref != null) {
          ref.current = value;
        }
      });
    };
  }, refs);
}
var SafeReact = {
  ...React3
};
var useInsertionEffect = SafeReact.useInsertionEffect;
var useSafeInsertionEffect = useInsertionEffect || ((fn) => fn());
function useEffectEvent(callback) {
  const ref = React3.useRef(() => {
    if (true) {
      throw new Error("Cannot call an event handler while rendering.");
    }
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return React3.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}
var ARROW_UP = "ArrowUp";
var ARROW_DOWN = "ArrowDown";
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
function isDifferentRow(index3, cols, prevRow) {
  return Math.floor(index3 / cols) !== prevRow;
}
function isIndexOutOfBounds(listRef, index3) {
  return index3 < 0 || index3 >= listRef.current.length;
}
function getMinIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    disabledIndices
  });
}
function getMaxIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    decrement: true,
    startingIndex: listRef.current.length,
    disabledIndices
  });
}
function findNonDisabledIndex(listRef, _temp) {
  let {
    startingIndex = -1,
    decrement = false,
    disabledIndices,
    amount = 1
  } = _temp === void 0 ? {} : _temp;
  const list = listRef.current;
  let index3 = startingIndex;
  do {
    index3 += decrement ? -amount : amount;
  } while (index3 >= 0 && index3 <= list.length - 1 && isDisabled(list, index3, disabledIndices));
  return index3;
}
function getGridNavigatedIndex(elementsRef, _ref) {
  let {
    event,
    orientation,
    loop,
    cols,
    disabledIndices,
    minIndex,
    maxIndex,
    prevIndex,
    stopEvent: stop = false
  } = _ref;
  let nextIndex = prevIndex;
  if (event.key === ARROW_UP) {
    stop && stopEvent(event);
    if (prevIndex === -1) {
      nextIndex = maxIndex;
    } else {
      nextIndex = findNonDisabledIndex(elementsRef, {
        startingIndex: nextIndex,
        amount: cols,
        decrement: true,
        disabledIndices
      });
      if (loop && (prevIndex - cols < minIndex || nextIndex < 0)) {
        const col = prevIndex % cols;
        const maxCol = maxIndex % cols;
        const offset4 = maxIndex - (maxCol - col);
        if (maxCol === col) {
          nextIndex = maxIndex;
        } else {
          nextIndex = maxCol > col ? offset4 : offset4 - cols;
        }
      }
    }
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      nextIndex = prevIndex;
    }
  }
  if (event.key === ARROW_DOWN) {
    stop && stopEvent(event);
    if (prevIndex === -1) {
      nextIndex = minIndex;
    } else {
      nextIndex = findNonDisabledIndex(elementsRef, {
        startingIndex: prevIndex,
        amount: cols,
        disabledIndices
      });
      if (loop && prevIndex + cols > maxIndex) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex % cols - cols,
          amount: cols,
          disabledIndices
        });
      }
    }
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      nextIndex = prevIndex;
    }
  }
  if (orientation === "both") {
    const prevRow = floor(prevIndex / cols);
    if (event.key === ARROW_RIGHT) {
      stop && stopEvent(event);
      if (prevIndex % cols !== cols - 1) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex,
          disabledIndices
        });
        if (loop && isDifferentRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledIndex(elementsRef, {
            startingIndex: prevIndex - prevIndex % cols - 1,
            disabledIndices
          });
        }
      } else if (loop) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
      }
      if (isDifferentRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    if (event.key === ARROW_LEFT) {
      stop && stopEvent(event);
      if (prevIndex % cols !== 0) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex,
          decrement: true,
          disabledIndices
        });
        if (loop && isDifferentRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledIndex(elementsRef, {
            startingIndex: prevIndex + (cols - prevIndex % cols),
            decrement: true,
            disabledIndices
          });
        }
      } else if (loop) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex + (cols - prevIndex % cols),
          decrement: true,
          disabledIndices
        });
      }
      if (isDifferentRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    const lastRow = floor(maxIndex / cols) === prevRow;
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      if (loop && lastRow) {
        nextIndex = event.key === ARROW_LEFT ? maxIndex : findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
      } else {
        nextIndex = prevIndex;
      }
    }
  }
  return nextIndex;
}
function buildCellMap(sizes, cols, dense) {
  const cellMap = [];
  let startIndex = 0;
  sizes.forEach((_ref2, index3) => {
    let {
      width,
      height
    } = _ref2;
    if (width > cols) {
      if (true) {
        throw new Error("[Floating UI]: Invalid grid - item width at index " + index3 + " is greater than grid columns");
      }
    }
    let itemPlaced = false;
    if (dense) {
      startIndex = 0;
    }
    while (!itemPlaced) {
      const targetCells = [];
      for (let i11 = 0; i11 < width; i11++) {
        for (let j11 = 0; j11 < height; j11++) {
          targetCells.push(startIndex + i11 + j11 * cols);
        }
      }
      if (startIndex % cols + width <= cols && targetCells.every((cell) => cellMap[cell] == null)) {
        targetCells.forEach((cell) => {
          cellMap[cell] = index3;
        });
        itemPlaced = true;
      } else {
        startIndex++;
      }
    }
  });
  return [...cellMap];
}
function getCellIndexOfCorner(index3, sizes, cellMap, cols, corner) {
  if (index3 === -1)
    return -1;
  const firstCellIndex = cellMap.indexOf(index3);
  const sizeItem = sizes[index3];
  switch (corner) {
    case "tl":
      return firstCellIndex;
    case "tr":
      if (!sizeItem) {
        return firstCellIndex;
      }
      return firstCellIndex + sizeItem.width - 1;
    case "bl":
      if (!sizeItem) {
        return firstCellIndex;
      }
      return firstCellIndex + (sizeItem.height - 1) * cols;
    case "br":
      return cellMap.lastIndexOf(index3);
  }
}
function getCellIndices(indices, cellMap) {
  return cellMap.flatMap((index3, cellIndex) => indices.includes(index3) ? [cellIndex] : []);
}
function isDisabled(list, index3, disabledIndices) {
  if (disabledIndices) {
    return disabledIndices.includes(index3);
  }
  const element = list[index3];
  return element == null || element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true";
}
var rafId = 0;
function enqueueFocus(el, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    preventScroll = false,
    cancelPrevious = true,
    sync = false
  } = options;
  cancelPrevious && cancelAnimationFrame(rafId);
  const exec = () => el == null ? void 0 : el.focus({
    preventScroll
  });
  if (sync) {
    exec();
  } else {
    rafId = requestAnimationFrame(exec);
  }
}
var index2 = typeof document !== "undefined" ? import_react69.useLayoutEffect : import_react69.useEffect;
function sortByDocumentPosition(a15, b7) {
  const position = a15.compareDocumentPosition(b7);
  if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
    return -1;
  }
  if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) {
    return 1;
  }
  return 0;
}
function areMapsEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  for (const [key, value] of map1.entries()) {
    if (value !== map2.get(key)) {
      return false;
    }
  }
  return true;
}
var FloatingListContext = React3.createContext({
  register: () => {
  },
  unregister: () => {
  },
  map: /* @__PURE__ */ new Map(),
  elementsRef: {
    current: []
  }
});
function FloatingList(props) {
  const {
    children,
    elementsRef,
    labelsRef
  } = props;
  const [map, setMap] = React3.useState(() => /* @__PURE__ */ new Map());
  const register = React3.useCallback((node) => {
    setMap((prevMap) => new Map(prevMap).set(node, null));
  }, []);
  const unregister = React3.useCallback((node) => {
    setMap((prevMap) => {
      const map2 = new Map(prevMap);
      map2.delete(node);
      return map2;
    });
  }, []);
  index2(() => {
    const newMap = new Map(map);
    const nodes = Array.from(newMap.keys()).sort(sortByDocumentPosition);
    nodes.forEach((node, index3) => {
      newMap.set(node, index3);
    });
    if (!areMapsEqual(map, newMap)) {
      setMap(newMap);
    }
  }, [map]);
  return React3.createElement(FloatingListContext.Provider, {
    value: React3.useMemo(() => ({
      register,
      unregister,
      map,
      elementsRef,
      labelsRef
    }), [register, unregister, map, elementsRef, labelsRef])
  }, children);
}
function useListItem(props) {
  if (props === void 0) {
    props = {};
  }
  const {
    label
  } = props;
  const {
    register,
    unregister,
    map,
    elementsRef,
    labelsRef
  } = React3.useContext(FloatingListContext);
  const [index$1, setIndex] = React3.useState(null);
  const componentRef = React3.useRef(null);
  const ref = React3.useCallback((node) => {
    componentRef.current = node;
    if (index$1 !== null) {
      elementsRef.current[index$1] = node;
      if (labelsRef) {
        var _node$textContent;
        const isLabelDefined = label !== void 0;
        labelsRef.current[index$1] = isLabelDefined ? label : (_node$textContent = node == null ? void 0 : node.textContent) != null ? _node$textContent : null;
      }
    }
  }, [index$1, elementsRef, labelsRef, label]);
  index2(() => {
    const node = componentRef.current;
    if (node) {
      register(node);
      return () => {
        unregister(node);
      };
    }
  }, [register, unregister]);
  index2(() => {
    const index3 = componentRef.current ? map.get(componentRef.current) : null;
    if (index3 != null) {
      setIndex(index3);
    }
  }, [map]);
  return React3.useMemo(() => ({
    ref,
    index: index$1 == null ? -1 : index$1
  }), [index$1, ref]);
}
function renderJsx(render, computedProps) {
  if (typeof render === "function") {
    return render(computedProps);
  }
  if (render) {
    return React3.cloneElement(render, computedProps);
  }
  return React3.createElement("div", computedProps);
}
var CompositeContext = React3.createContext({
  activeIndex: 0,
  onNavigate: () => {
  }
});
var horizontalKeys = [ARROW_LEFT, ARROW_RIGHT];
var verticalKeys = [ARROW_UP, ARROW_DOWN];
var allKeys = [...horizontalKeys, ...verticalKeys];
var Composite = React3.forwardRef(function Composite2(props, forwardedRef) {
  const {
    render,
    orientation = "both",
    loop = true,
    cols = 1,
    disabledIndices,
    activeIndex: externalActiveIndex,
    onNavigate: externalSetActiveIndex,
    itemSizes,
    dense = false,
    ...domProps
  } = props;
  const [internalActiveIndex, internalSetActiveIndex] = React3.useState(0);
  const activeIndex = externalActiveIndex != null ? externalActiveIndex : internalActiveIndex;
  const onNavigate = useEffectEvent(externalSetActiveIndex != null ? externalSetActiveIndex : internalSetActiveIndex);
  const elementsRef = React3.useRef([]);
  const renderElementProps = render && typeof render !== "function" ? render.props : {};
  const contextValue = React3.useMemo(() => ({
    activeIndex,
    onNavigate
  }), [activeIndex, onNavigate]);
  const isGrid = cols > 1;
  function handleKeyDown(event) {
    if (!allKeys.includes(event.key))
      return;
    let nextIndex = activeIndex;
    const minIndex = getMinIndex(elementsRef, disabledIndices);
    const maxIndex = getMaxIndex(elementsRef, disabledIndices);
    if (isGrid) {
      const sizes = itemSizes || Array.from({
        length: elementsRef.current.length
      }, () => ({
        width: 1,
        height: 1
      }));
      const cellMap = buildCellMap(sizes, cols, dense);
      const minGridIndex = cellMap.findIndex((index3) => index3 != null && !isDisabled(elementsRef.current, index3, disabledIndices));
      const maxGridIndex = cellMap.reduce((foundIndex, index3, cellIndex) => index3 != null && !isDisabled(elementsRef.current, index3, disabledIndices) ? cellIndex : foundIndex, -1);
      nextIndex = cellMap[getGridNavigatedIndex({
        current: cellMap.map((itemIndex) => itemIndex ? elementsRef.current[itemIndex] : null)
      }, {
        event,
        orientation,
        loop,
        cols,
        // treat undefined (empty grid spaces) as disabled indices so we
        // don't end up in them
        disabledIndices: getCellIndices([...disabledIndices || elementsRef.current.map((_7, index3) => isDisabled(elementsRef.current, index3) ? index3 : void 0), void 0], cellMap),
        minIndex: minGridIndex,
        maxIndex: maxGridIndex,
        prevIndex: getCellIndexOfCorner(
          activeIndex > maxIndex ? minIndex : activeIndex,
          sizes,
          cellMap,
          cols,
          // use a corner matching the edge closest to the direction we're
          // moving in so we don't end up in the same item. Prefer
          // top/left over bottom/right.
          event.key === ARROW_DOWN ? "bl" : event.key === ARROW_RIGHT ? "tr" : "tl"
        )
      })];
    }
    const toEndKeys = {
      horizontal: [ARROW_RIGHT],
      vertical: [ARROW_DOWN],
      both: [ARROW_RIGHT, ARROW_DOWN]
    }[orientation];
    const toStartKeys = {
      horizontal: [ARROW_LEFT],
      vertical: [ARROW_UP],
      both: [ARROW_LEFT, ARROW_UP]
    }[orientation];
    const preventedKeys = isGrid ? allKeys : {
      horizontal: horizontalKeys,
      vertical: verticalKeys,
      both: allKeys
    }[orientation];
    if (nextIndex === activeIndex && [...toEndKeys, ...toStartKeys].includes(event.key)) {
      if (loop && nextIndex === maxIndex && toEndKeys.includes(event.key)) {
        nextIndex = minIndex;
      } else if (loop && nextIndex === minIndex && toStartKeys.includes(event.key)) {
        nextIndex = maxIndex;
      } else {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: nextIndex,
          decrement: toStartKeys.includes(event.key),
          disabledIndices
        });
      }
    }
    if (nextIndex !== activeIndex && !isIndexOutOfBounds(elementsRef, nextIndex)) {
      event.stopPropagation();
      if (preventedKeys.includes(event.key)) {
        event.preventDefault();
      }
      onNavigate(nextIndex);
      queueMicrotask(() => {
        enqueueFocus(elementsRef.current[nextIndex]);
      });
    }
  }
  const computedProps = {
    ...domProps,
    ...renderElementProps,
    ref: forwardedRef,
    "aria-orientation": orientation === "both" ? void 0 : orientation,
    onKeyDown(e7) {
      domProps.onKeyDown == null || domProps.onKeyDown(e7);
      renderElementProps.onKeyDown == null || renderElementProps.onKeyDown(e7);
      handleKeyDown(e7);
    }
  };
  return React3.createElement(CompositeContext.Provider, {
    value: contextValue
  }, React3.createElement(FloatingList, {
    elementsRef
  }, renderJsx(render, computedProps)));
});
var CompositeItem = React3.forwardRef(function CompositeItem2(props, forwardedRef) {
  const {
    render,
    ...domProps
  } = props;
  const renderElementProps = render && typeof render !== "function" ? render.props : {};
  const {
    activeIndex,
    onNavigate
  } = React3.useContext(CompositeContext);
  const {
    ref,
    index: index3
  } = useListItem();
  const mergedRef = useMergeRefs([ref, forwardedRef, renderElementProps.ref]);
  const isActive = activeIndex === index3;
  const computedProps = {
    ...domProps,
    ...renderElementProps,
    ref: mergedRef,
    tabIndex: isActive ? 0 : -1,
    "data-active": isActive ? "" : void 0,
    onFocus(e7) {
      domProps.onFocus == null || domProps.onFocus(e7);
      renderElementProps.onFocus == null || renderElementProps.onFocus(e7);
      onNavigate(index3);
    }
  };
  return renderJsx(render, computedProps);
});
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i11 = 1; i11 < arguments.length; i11++) {
      var source = arguments[i11];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var serverHandoffComplete = false;
var count = 0;
var genId = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + count++
);
function useFloatingId() {
  const [id, setId] = React3.useState(() => serverHandoffComplete ? genId() : void 0);
  index2(() => {
    if (id == null) {
      setId(genId());
    }
  }, []);
  React3.useEffect(() => {
    serverHandoffComplete = true;
  }, []);
  return id;
}
var useReactId = SafeReact.useId;
var useId = useReactId || useFloatingId;
var devMessageSet;
if (true) {
  devMessageSet = /* @__PURE__ */ new Set();
}
function warn() {
  var _devMessageSet;
  for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
    messages[_key] = arguments[_key];
  }
  const message = "Floating UI: " + messages.join(" ");
  if (!((_devMessageSet = devMessageSet) != null && _devMessageSet.has(message))) {
    var _devMessageSet2;
    (_devMessageSet2 = devMessageSet) == null || _devMessageSet2.add(message);
    console.warn(message);
  }
}
function error() {
  var _devMessageSet3;
  for (var _len2 = arguments.length, messages = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    messages[_key2] = arguments[_key2];
  }
  const message = "Floating UI: " + messages.join(" ");
  if (!((_devMessageSet3 = devMessageSet) != null && _devMessageSet3.has(message))) {
    var _devMessageSet4;
    (_devMessageSet4 = devMessageSet) == null || _devMessageSet4.add(message);
    console.error(message);
  }
}
var FloatingArrow = React3.forwardRef(function FloatingArrow2(props, ref) {
  const {
    context: {
      placement,
      elements: {
        floating
      },
      middlewareData: {
        arrow: arrow4
      }
    },
    width = 14,
    height = 7,
    tipRadius = 0,
    strokeWidth = 0,
    staticOffset,
    stroke,
    d: d15,
    style: {
      transform,
      ...restStyle
    } = {},
    ...rest
  } = props;
  if (true) {
    if (!ref) {
      warn("The `ref` prop is required for `FloatingArrow`.");
    }
  }
  const clipPathId = useId();
  if (!floating) {
    return null;
  }
  const computedStrokeWidth = strokeWidth * 2;
  const halfStrokeWidth = computedStrokeWidth / 2;
  const svgX = width / 2 * (tipRadius / -8 + 1);
  const svgY = height / 2 * tipRadius / 4;
  const [side, alignment] = placement.split("-");
  const isRTL2 = platform.isRTL(floating);
  const isCustomShape = !!d15;
  const isVerticalSide = side === "top" || side === "bottom";
  const yOffsetProp = staticOffset && alignment === "end" ? "bottom" : "top";
  let xOffsetProp = staticOffset && alignment === "end" ? "right" : "left";
  if (staticOffset && isRTL2) {
    xOffsetProp = alignment === "end" ? "left" : "right";
  }
  const arrowX = (arrow4 == null ? void 0 : arrow4.x) != null ? staticOffset || arrow4.x : "";
  const arrowY = (arrow4 == null ? void 0 : arrow4.y) != null ? staticOffset || arrow4.y : "";
  const dValue = d15 || "M0,0" + (" H" + width) + (" L" + (width - svgX) + "," + (height - svgY)) + (" Q" + width / 2 + "," + height + " " + svgX + "," + (height - svgY)) + " Z";
  const rotation = {
    top: isCustomShape ? "rotate(180deg)" : "",
    left: isCustomShape ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: isCustomShape ? "" : "rotate(180deg)",
    right: isCustomShape ? "rotate(-90deg)" : "rotate(90deg)"
  }[side];
  return React3.createElement("svg", _extends({}, rest, {
    "aria-hidden": true,
    ref,
    width: isCustomShape ? width : width + computedStrokeWidth,
    height: width,
    viewBox: "0 0 " + width + " " + (height > width ? height : width),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [xOffsetProp]: arrowX,
      [yOffsetProp]: arrowY,
      [side]: isVerticalSide || isCustomShape ? "100%" : "calc(100% - " + computedStrokeWidth / 2 + "px)",
      transform: "" + rotation + (transform != null ? transform : ""),
      ...restStyle
    }
  }), computedStrokeWidth > 0 && React3.createElement("path", {
    clipPath: "url(#" + clipPathId + ")",
    fill: "none",
    stroke,
    strokeWidth: computedStrokeWidth + (d15 ? 0 : 1),
    d: dValue
  }), React3.createElement("path", {
    stroke: computedStrokeWidth && !d15 ? rest.fill : "none",
    d: dValue
  }), React3.createElement("clipPath", {
    id: clipPathId
  }, React3.createElement("rect", {
    x: -halfStrokeWidth,
    y: halfStrokeWidth * (isCustomShape ? -1 : 1),
    width: width + computedStrokeWidth,
    height: width
  })));
});
function createPubSub() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null || _map$get.forEach((handler) => handler(data));
    },
    on(event, listener) {
      map.set(event, [...map.get(event) || [], listener]);
    },
    off(event, listener) {
      var _map$get2;
      map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter((l15) => l15 !== listener)) || []);
    }
  };
}
var FloatingNodeContext = React3.createContext(null);
var FloatingTreeContext = React3.createContext(null);
var useFloatingParentNodeId = () => {
  var _React$useContext;
  return ((_React$useContext = React3.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
};
var useFloatingTree = () => React3.useContext(FloatingTreeContext);
function createAttribute(name) {
  return "data-floating-ui-" + name;
}
var safePolygonIdentifier = createAttribute("safe-polygon");
var NOOP = () => {
};
var FloatingDelayGroupContext = React3.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: NOOP,
  setState: NOOP,
  isInstantPhase: false
});
var HIDDEN_STYLES = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0
};
var timeoutId;
function setActiveElementOnTab(event) {
  if (event.key === "Tab") {
    event.target;
    clearTimeout(timeoutId);
  }
}
var FocusGuard = React3.forwardRef(function FocusGuard2(props, ref) {
  const [role, setRole] = React3.useState();
  index2(() => {
    if (isSafari()) {
      setRole("button");
    }
    document.addEventListener("keydown", setActiveElementOnTab);
    return () => {
      document.removeEventListener("keydown", setActiveElementOnTab);
    };
  }, []);
  const restProps = {
    ref,
    tabIndex: 0,
    // Role is only for VoiceOver
    role,
    "aria-hidden": role ? void 0 : true,
    [createAttribute("focus-guard")]: "",
    style: HIDDEN_STYLES
  };
  return React3.createElement("span", _extends({}, props, restProps));
});
var PortalContext = React3.createContext(null);
var attr = createAttribute("portal");
var VisuallyHiddenDismiss = React3.forwardRef(function VisuallyHiddenDismiss2(props, ref) {
  return React3.createElement("button", _extends({}, props, {
    type: "button",
    ref,
    tabIndex: -1,
    style: HIDDEN_STYLES
  }));
});
var activeLocks = /* @__PURE__ */ new Set();
var FloatingOverlay = React3.forwardRef(function FloatingOverlay2(props, ref) {
  const {
    lockScroll = false,
    ...rest
  } = props;
  const lockId = useId();
  index2(() => {
    if (!lockScroll)
      return;
    activeLocks.add(lockId);
    const isIOS = /iP(hone|ad|od)|iOS/.test(getPlatform());
    const bodyStyle = document.body.style;
    const scrollbarX = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft;
    const paddingProp = scrollbarX ? "paddingLeft" : "paddingRight";
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const scrollX = bodyStyle.left ? parseFloat(bodyStyle.left) : window.pageXOffset;
    const scrollY = bodyStyle.top ? parseFloat(bodyStyle.top) : window.pageYOffset;
    bodyStyle.overflow = "hidden";
    if (scrollbarWidth) {
      bodyStyle[paddingProp] = scrollbarWidth + "px";
    }
    if (isIOS) {
      var _window$visualViewpor, _window$visualViewpor2;
      const offsetLeft = ((_window$visualViewpor = window.visualViewport) == null ? void 0 : _window$visualViewpor.offsetLeft) || 0;
      const offsetTop = ((_window$visualViewpor2 = window.visualViewport) == null ? void 0 : _window$visualViewpor2.offsetTop) || 0;
      Object.assign(bodyStyle, {
        position: "fixed",
        top: -(scrollY - Math.floor(offsetTop)) + "px",
        left: -(scrollX - Math.floor(offsetLeft)) + "px",
        right: "0"
      });
    }
    return () => {
      activeLocks.delete(lockId);
      if (activeLocks.size === 0) {
        Object.assign(bodyStyle, {
          overflow: "",
          [paddingProp]: ""
        });
        if (isIOS) {
          Object.assign(bodyStyle, {
            position: "",
            top: "",
            left: "",
            right: ""
          });
          window.scrollTo(scrollX, scrollY);
        }
      }
    };
  }, [lockId, lockScroll]);
  return React3.createElement("div", _extends({
    ref
  }, rest, {
    style: {
      position: "fixed",
      overflow: "auto",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...rest.style
    }
  }));
});
function useFloatingRootContext(options) {
  const {
    open = false,
    onOpenChange: onOpenChangeProp,
    elements: elementsProp
  } = options;
  const floatingId = useId();
  const dataRef = React3.useRef({});
  const [events] = React3.useState(() => createPubSub());
  const nested = useFloatingParentNodeId() != null;
  if (true) {
    const optionDomReference = elementsProp.reference;
    if (optionDomReference && !isElement(optionDomReference)) {
      error("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
    }
  }
  const [positionReference, setPositionReference] = React3.useState(elementsProp.reference);
  const onOpenChange = useEffectEvent((open2, event, reason) => {
    dataRef.current.openEvent = open2 ? event : void 0;
    events.emit("openchange", {
      open: open2,
      event,
      reason,
      nested
    });
    onOpenChangeProp == null || onOpenChangeProp(open2, event, reason);
  });
  const refs = React3.useMemo(() => ({
    setPositionReference
  }), []);
  const elements = React3.useMemo(() => ({
    reference: positionReference || elementsProp.reference || null,
    floating: elementsProp.floating || null,
    domReference: elementsProp.reference
  }), [positionReference, elementsProp.reference, elementsProp.floating]);
  return React3.useMemo(() => ({
    dataRef,
    open,
    onOpenChange,
    elements,
    events,
    floatingId,
    refs
  }), [open, onOpenChange, elements, events, floatingId, refs]);
}
function useFloating2(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    nodeId
  } = options;
  const internalRootContext = useFloatingRootContext({
    ...options,
    elements: {
      reference: null,
      floating: null,
      ...options.elements
    }
  });
  const rootContext = options.rootContext || internalRootContext;
  const computedElements = rootContext.elements;
  const [_domReference, setDomReference] = React3.useState(null);
  const [positionReference, _setPositionReference] = React3.useState(null);
  const optionDomReference = computedElements == null ? void 0 : computedElements.reference;
  const domReference = optionDomReference || _domReference;
  const domReferenceRef = React3.useRef(null);
  const tree = useFloatingTree();
  index2(() => {
    if (domReference) {
      domReferenceRef.current = domReference;
    }
  }, [domReference]);
  const position = useFloating({
    ...options,
    elements: {
      ...computedElements,
      ...positionReference && {
        reference: positionReference
      }
    }
  });
  const setPositionReference = React3.useCallback((node) => {
    const computedPositionReference = isElement(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      contextElement: node
    } : node;
    _setPositionReference(computedPositionReference);
    position.refs.setReference(computedPositionReference);
  }, [position.refs]);
  const setReference = React3.useCallback((node) => {
    if (isElement(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }
    if (isElement(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = React3.useMemo(() => ({
    ...position.refs,
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = React3.useMemo(() => ({
    ...position.elements,
    domReference
  }), [position.elements, domReference]);
  const context = React3.useMemo(() => ({
    ...position,
    ...rootContext,
    refs,
    elements,
    nodeId
  }), [position, refs, elements, nodeId, rootContext]);
  index2(() => {
    rootContext.dataRef.current.floatingContext = context;
    const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React3.useMemo(() => ({
    ...position,
    context,
    refs,
    elements
  }), [position, refs, elements, context]);
}
var ACTIVE_KEY = "active";
var SELECTED_KEY = "selected";
function mergeProps(userProps, propsList, elementKey) {
  const map = /* @__PURE__ */ new Map();
  const isItem = elementKey === "item";
  let domUserProps = userProps;
  if (isItem && userProps) {
    const {
      [ACTIVE_KEY]: _7,
      [SELECTED_KEY]: __,
      ...validProps
    } = userProps;
    domUserProps = validProps;
  }
  return {
    ...elementKey === "floating" && {
      tabIndex: -1
    },
    ...domUserProps,
    ...propsList.map((value) => {
      const propsOrGetProps = value ? value[elementKey] : null;
      if (typeof propsOrGetProps === "function") {
        return userProps ? propsOrGetProps(userProps) : null;
      }
      return propsOrGetProps;
    }).concat(userProps).reduce((acc, props) => {
      if (!props) {
        return acc;
      }
      Object.entries(props).forEach((_ref) => {
        let [key, value] = _ref;
        if (isItem && [ACTIVE_KEY, SELECTED_KEY].includes(key)) {
          return;
        }
        if (key.indexOf("on") === 0) {
          if (!map.has(key)) {
            map.set(key, []);
          }
          if (typeof value === "function") {
            var _map$get;
            (_map$get = map.get(key)) == null || _map$get.push(value);
            acc[key] = function() {
              var _map$get2;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map((fn) => fn(...args)).find((val) => val !== void 0);
            };
          }
        } else {
          acc[key] = value;
        }
      });
      return acc;
    }, {})
  };
}
function useInteractions(propsList) {
  if (propsList === void 0) {
    propsList = [];
  }
  const deps = propsList;
  const getReferenceProps = React3.useCallback(
    (userProps) => mergeProps(userProps, propsList, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  );
  const getFloatingProps = React3.useCallback(
    (userProps) => mergeProps(userProps, propsList, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  );
  const getItemProps = React3.useCallback(
    (userProps) => mergeProps(userProps, propsList, "item"),
    // Granularly check for `item` changes, because the `getItemProps` getter
    // should be as referentially stable as possible since it may be passed as
    // a prop to many components. All `item` key values must therefore be
    // memoized.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    propsList.map((key) => key == null ? void 0 : key.item)
  );
  return React3.useMemo(() => ({
    getReferenceProps,
    getFloatingProps,
    getItemProps
  }), [getReferenceProps, getFloatingProps, getItemProps]);
}
function getArgsWithCustomFloatingHeight(state, height) {
  return {
    ...state,
    rects: {
      ...state.rects,
      floating: {
        ...state.rects.floating,
        height
      }
    }
  };
}
var inner = (props) => ({
  name: "inner",
  options: props,
  async fn(state) {
    const {
      listRef,
      overflowRef,
      onFallbackChange,
      offset: innerOffset = 0,
      index: index3 = 0,
      minItemsVisible = 4,
      referenceOverflowThreshold = 0,
      scrollRef,
      ...detectOverflowOptions
    } = props;
    const {
      rects,
      elements: {
        floating
      }
    } = state;
    const item = listRef.current[index3];
    if (true) {
      if (!state.placement.startsWith("bottom")) {
        warn('`placement` side must be "bottom" when using the `inner`', "middleware.");
      }
    }
    if (!item) {
      return {};
    }
    const nextArgs = {
      ...state,
      ...await offset3(-item.offsetTop - floating.clientTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(state)
    };
    const el = (scrollRef == null ? void 0 : scrollRef.current) || floating;
    const overflow = await detectOverflow2(getArgsWithCustomFloatingHeight(nextArgs, el.scrollHeight), detectOverflowOptions);
    const refOverflow = await detectOverflow2(nextArgs, {
      ...detectOverflowOptions,
      elementContext: "reference"
    });
    const diffY = Math.max(0, overflow.top);
    const nextY = nextArgs.y + diffY;
    const maxHeight = Math.max(0, el.scrollHeight - diffY - Math.max(0, overflow.bottom));
    el.style.maxHeight = maxHeight + "px";
    el.scrollTop = diffY;
    if (onFallbackChange) {
      if (el.offsetHeight < item.offsetHeight * Math.min(minItemsVisible, listRef.current.length - 1) - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold) {
        (0, import_react_dom5.flushSync)(() => onFallbackChange(true));
      } else {
        (0, import_react_dom5.flushSync)(() => onFallbackChange(false));
      }
    }
    if (overflowRef) {
      overflowRef.current = await detectOverflow2(getArgsWithCustomFloatingHeight({
        ...nextArgs,
        y: nextY
      }, el.offsetHeight), detectOverflowOptions);
    }
    return {
      y: nextY
    };
  }
});
function useInnerOffset(context, props) {
  const {
    open,
    elements
  } = context;
  const {
    enabled = true,
    overflowRef,
    scrollRef,
    onChange: unstable_onChange
  } = props;
  const onChange = useEffectEvent(unstable_onChange);
  const controlledScrollingRef = React3.useRef(false);
  const prevScrollTopRef = React3.useRef(null);
  const initialOverflowRef = React3.useRef(null);
  React3.useEffect(() => {
    if (!enabled) {
      return;
    }
    function onWheel(e7) {
      if (e7.ctrlKey || !el || overflowRef.current == null) {
        return;
      }
      const dY = e7.deltaY;
      const isAtTop = overflowRef.current.top >= -0.5;
      const isAtBottom = overflowRef.current.bottom >= -0.5;
      const remainingScroll = el.scrollHeight - el.clientHeight;
      const sign = dY < 0 ? -1 : 1;
      const method = dY < 0 ? "max" : "min";
      if (el.scrollHeight <= el.clientHeight) {
        return;
      }
      if (!isAtTop && dY > 0 || !isAtBottom && dY < 0) {
        e7.preventDefault();
        (0, import_react_dom5.flushSync)(() => {
          onChange((d15) => d15 + Math[method](dY, remainingScroll * sign));
        });
      } else if (/firefox/i.test(getUserAgent())) {
        el.scrollTop += dY;
      }
    }
    const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
    if (open && el) {
      el.addEventListener("wheel", onWheel);
      requestAnimationFrame(() => {
        prevScrollTopRef.current = el.scrollTop;
        if (overflowRef.current != null) {
          initialOverflowRef.current = {
            ...overflowRef.current
          };
        }
      });
      return () => {
        prevScrollTopRef.current = null;
        initialOverflowRef.current = null;
        el.removeEventListener("wheel", onWheel);
      };
    }
  }, [enabled, open, elements.floating, overflowRef, scrollRef, onChange]);
  return React3.useMemo(() => {
    if (!enabled) {
      return {};
    }
    return {
      floating: {
        onKeyDown() {
          controlledScrollingRef.current = true;
        },
        onWheel() {
          controlledScrollingRef.current = false;
        },
        onPointerMove() {
          controlledScrollingRef.current = false;
        },
        onScroll() {
          const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
          if (!overflowRef.current || !el || !controlledScrollingRef.current) {
            return;
          }
          if (prevScrollTopRef.current !== null) {
            const scrollDiff = el.scrollTop - prevScrollTopRef.current;
            if (overflowRef.current.bottom < -0.5 && scrollDiff < -1 || overflowRef.current.top < -0.5 && scrollDiff > 1) {
              (0, import_react_dom5.flushSync)(() => onChange((d15) => d15 + scrollDiff));
            }
          }
          requestAnimationFrame(() => {
            prevScrollTopRef.current = el.scrollTop;
          });
        }
      }
    };
  }, [enabled, overflowRef, elements.floating, scrollRef, onChange]);
}

// node_modules/@headlessui/react/dist/internal/floating.js
var j4 = __toESM(require_react(), 1);
var import_react71 = __toESM(require_react(), 1);
var y4 = (0, import_react71.createContext)({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
y4.displayName = "FloatingContext";
var S4 = (0, import_react71.createContext)(null);
S4.displayName = "PlacementContext";
function xe(e7) {
  return (0, import_react71.useMemo)(() => e7 ? typeof e7 == "string" ? { to: e7 } : e7 : null, [e7]);
}
function ye() {
  return (0, import_react71.useContext)(y4).setReference;
}
function Fe() {
  return (0, import_react71.useContext)(y4).getReferenceProps;
}
function be() {
  let { getFloatingProps: e7, slot: t15 } = (0, import_react71.useContext)(y4);
  return (0, import_react71.useCallback)((...n14) => Object.assign({}, e7(...n14), { "data-anchor": t15.anchor }), [e7, t15]);
}
function Re(e7 = null) {
  e7 === false && (e7 = null), typeof e7 == "string" && (e7 = { to: e7 });
  let t15 = (0, import_react71.useContext)(S4), n14 = (0, import_react71.useMemo)(() => e7, [JSON.stringify(e7, typeof HTMLElement != "undefined" ? (a15, r14) => r14 instanceof HTMLElement ? r14.outerHTML : r14 : void 0)]);
  n(() => {
    t15 == null || t15(n14 != null ? n14 : null);
  }, [t15, n14]);
  let l15 = (0, import_react71.useContext)(y4);
  return (0, import_react71.useMemo)(() => [l15.setFloating, e7 ? l15.styles : {}], [l15.setFloating, e7, l15.styles]);
}
var q = 4;
function ve2({ children: e7, enabled: t15 = true }) {
  let [n14, l15] = (0, import_react71.useState)(null), [a15, r14] = (0, import_react71.useState)(0), c13 = (0, import_react71.useRef)(null), [u16, i11] = (0, import_react71.useState)(null);
  pe(u16);
  let o17 = t15 && n14 !== null && u16 !== null, { to: F6 = "bottom", gap: C7 = 0, offset: M7 = 0, padding: p8 = 0, inner: P7 } = ce(n14, u16), [s16, f21 = "center"] = F6.split(" ");
  n(() => {
    o17 && r14(0);
  }, [o17]);
  let { refs: b7, floatingStyles: $5, context: g7 } = useFloating2({ open: o17, placement: s16 === "selection" ? f21 === "center" ? "bottom" : `bottom-${f21}` : f21 === "center" ? `${s16}` : `${s16}-${f21}`, strategy: "absolute", transform: false, middleware: [offset3({ mainAxis: s16 === "selection" ? 0 : C7, crossAxis: M7 }), shift3({ padding: p8 }), s16 !== "selection" && flip3({ padding: p8 }), s16 === "selection" && P7 ? inner({ ...P7, padding: p8, overflowRef: c13, offset: a15, minItemsVisible: q, referenceOverflowThreshold: p8, onFallbackChange(h7) {
    var W7, k4;
    if (!h7)
      return;
    let d15 = g7.elements.floating;
    if (!d15)
      return;
    let T12 = parseFloat(getComputedStyle(d15).scrollPaddingBottom) || 0, w10 = Math.min(q, d15.childElementCount), B4 = 0, O3 = 0;
    for (let m13 of (k4 = (W7 = g7.elements.floating) == null ? void 0 : W7.childNodes) != null ? k4 : [])
      if (m13 instanceof HTMLElement) {
        let x6 = m13.offsetTop, N5 = x6 + m13.clientHeight + T12, H10 = d15.scrollTop, U6 = H10 + d15.clientHeight;
        if (x6 >= H10 && N5 <= U6)
          w10--;
        else {
          O3 = Math.max(0, Math.min(N5, U6) - Math.max(x6, H10)), B4 = m13.clientHeight;
          break;
        }
      }
    w10 >= 1 && r14((m13) => {
      let x6 = B4 * w10 - O3 + T12;
      return m13 >= x6 ? m13 : x6;
    });
  } }) : null, size3({ padding: p8, apply({ availableWidth: h7, availableHeight: d15, elements: T12 }) {
    Object.assign(T12.floating.style, { overflow: "auto", maxWidth: `${h7}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${d15}px)` });
  } })].filter(Boolean), whileElementsMounted: autoUpdate }), [I5 = s16, V5 = f21] = g7.placement.split("-");
  s16 === "selection" && (I5 = "selection");
  let G8 = (0, import_react71.useMemo)(() => ({ anchor: [I5, V5].filter(Boolean).join(" ") }), [I5, V5]), K4 = useInnerOffset(g7, { overflowRef: c13, onChange: r14 }), { getReferenceProps: Q5, getFloatingProps: X3 } = useInteractions([K4]), Y5 = o4((h7) => {
    i11(h7), b7.setFloating(h7);
  });
  return j4.createElement(S4.Provider, { value: l15 }, j4.createElement(y4.Provider, { value: { setFloating: Y5, setReference: b7.setReference, styles: $5, getReferenceProps: Q5, getFloatingProps: X3, slot: G8 } }, e7));
}
function pe(e7) {
  n(() => {
    if (!e7)
      return;
    let t15 = new MutationObserver(() => {
      let n14 = e7.style.maxHeight;
      parseFloat(n14) !== parseInt(n14) && (e7.style.maxHeight = `${Math.ceil(parseFloat(n14))}px`);
    });
    return t15.observe(e7, { attributes: true, attributeFilter: ["style"] }), () => {
      t15.disconnect();
    };
  }, [e7]);
}
function ce(e7, t15) {
  var r14, c13, u16;
  let n14 = L((r14 = e7 == null ? void 0 : e7.gap) != null ? r14 : "var(--anchor-gap, 0)", t15), l15 = L((c13 = e7 == null ? void 0 : e7.offset) != null ? c13 : "var(--anchor-offset, 0)", t15), a15 = L((u16 = e7 == null ? void 0 : e7.padding) != null ? u16 : "var(--anchor-padding, 0)", t15);
  return { ...e7, gap: n14, offset: l15, padding: a15 };
}
function L(e7, t15, n14 = void 0) {
  let l15 = p(), a15 = o4((i11, o17) => {
    if (i11 == null)
      return [n14, null];
    if (typeof i11 == "number")
      return [i11, null];
    if (typeof i11 == "string") {
      if (!o17)
        return [n14, null];
      let F6 = J(i11, o17);
      return [F6, (C7) => {
        let M7 = D3(i11);
        {
          let p8 = M7.map((P7) => window.getComputedStyle(o17).getPropertyValue(P7));
          l15.requestAnimationFrame(function P7() {
            l15.nextFrame(P7);
            let s16 = false;
            for (let [b7, $5] of M7.entries()) {
              let g7 = window.getComputedStyle(o17).getPropertyValue($5);
              if (p8[b7] !== g7) {
                p8[b7] = g7, s16 = true;
                break;
              }
            }
            if (!s16)
              return;
            let f21 = J(i11, o17);
            F6 !== f21 && (C7(f21), F6 = f21);
          });
        }
        return l15.dispose;
      }];
    }
    return [n14, null];
  }), r14 = (0, import_react71.useMemo)(() => a15(e7, t15)[0], [e7, t15]), [c13 = r14, u16] = (0, import_react71.useState)();
  return n(() => {
    let [i11, o17] = a15(e7, t15);
    if (u16(i11), !!o17)
      return o17(u16);
  }, [e7, t15]), c13;
}
function D3(e7) {
  let t15 = /var\((.*)\)/.exec(e7);
  if (t15) {
    let n14 = t15[1].indexOf(",");
    if (n14 === -1)
      return [t15[1]];
    let l15 = t15[1].slice(0, n14).trim(), a15 = t15[1].slice(n14 + 1).trim();
    return a15 ? [l15, ...D3(a15)] : [l15];
  }
  return [];
}
function J(e7, t15) {
  let n14 = document.createElement("div");
  t15.appendChild(n14), n14.style.setProperty("margin-top", "0px", "important"), n14.style.setProperty("margin-top", e7, "important");
  let l15 = parseFloat(window.getComputedStyle(n14).marginTop) || 0;
  return t15.removeChild(n14), l15;
}

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react72 = __toESM(require_react(), 1);
var n10 = (0, import_react72.createContext)(null);
n10.displayName = "OpenClosedContext";
var d9 = ((e7) => (e7[e7.Open = 1] = "Open", e7[e7.Closed = 2] = "Closed", e7[e7.Closing = 4] = "Closing", e7[e7.Opening = 8] = "Opening", e7))(d9 || {});
function u12() {
  return (0, import_react72.useContext)(n10);
}
function s8({ value: o17, children: r14 }) {
  return import_react72.default.createElement(n10.Provider, { value: o17 }, r14);
}

// node_modules/@headlessui/react/dist/utils/document-ready.js
function t8(n14) {
  function e7() {
    document.readyState !== "loading" && (n14(), document.removeEventListener("DOMContentLoaded", e7));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e7), e7());
}

// node_modules/@headlessui/react/dist/utils/active-element-history.js
var t9 = [];
t8(() => {
  function e7(n14) {
    n14.target instanceof HTMLElement && n14.target !== document.body && t9[0] !== n14.target && (t9.unshift(n14.target), t9 = t9.filter((r14) => r14 != null && r14.isConnected), t9.splice(10));
  }
  window.addEventListener("click", e7, { capture: true }), window.addEventListener("mousedown", e7, { capture: true }), window.addEventListener("focus", e7, { capture: true }), document.body.addEventListener("click", e7, { capture: true }), document.body.addEventListener("mousedown", e7, { capture: true }), document.body.addEventListener("focus", e7, { capture: true });
});

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function u13(l15) {
  throw new Error("Unexpected object: " + l15);
}
var c6 = ((i11) => (i11[i11.First = 0] = "First", i11[i11.Previous = 1] = "Previous", i11[i11.Next = 2] = "Next", i11[i11.Last = 3] = "Last", i11[i11.Specific = 4] = "Specific", i11[i11.Nothing = 5] = "Nothing", i11))(c6 || {});
function f13(l15, n14) {
  let t15 = n14.resolveItems();
  if (t15.length <= 0)
    return null;
  let r14 = n14.resolveActiveIndex(), s16 = r14 != null ? r14 : -1;
  switch (l15.focus) {
    case 0: {
      for (let e7 = 0; e7 < t15.length; ++e7)
        if (!n14.resolveDisabled(t15[e7], e7, t15))
          return e7;
      return r14;
    }
    case 1: {
      s16 === -1 && (s16 = t15.length);
      for (let e7 = s16 - 1; e7 >= 0; --e7)
        if (!n14.resolveDisabled(t15[e7], e7, t15))
          return e7;
      return r14;
    }
    case 2: {
      for (let e7 = s16 + 1; e7 < t15.length; ++e7)
        if (!n14.resolveDisabled(t15[e7], e7, t15))
          return e7;
      return r14;
    }
    case 3: {
      for (let e7 = t15.length - 1; e7 >= 0; --e7)
        if (!n14.resolveDisabled(t15[e7], e7, t15))
          return e7;
      return r14;
    }
    case 4: {
      for (let e7 = 0; e7 < t15.length; ++e7)
        if (n14.resolveId(t15[e7], e7, t15) === l15.id)
          return e7;
      return r14;
    }
    case 5:
      return null;
    default:
      u13(l15);
  }
}

// node_modules/@headlessui/react/dist/components/mouse.js
var g2 = ((f21) => (f21[f21.Left = 0] = "Left", f21[f21.Right = 2] = "Right", f21))(g2 || {});

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react75 = __toESM(require_react(), 1);
var import_react_dom6 = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
var import_react73 = __toESM(require_react(), 1);
function c7(t15) {
  let r14 = o4(t15), e7 = (0, import_react73.useRef)(false);
  (0, import_react73.useEffect)(() => (e7.current = false, () => {
    e7.current = true, t(() => {
      e7.current && r14();
    });
  }), [r14]);
}

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var t10 = __toESM(require_react(), 1);
function s9() {
  let r14 = typeof document == "undefined";
  return "useSyncExternalStore" in t10 ? ((o17) => o17.useSyncExternalStore)(t10)(() => () => {
  }, () => false, () => !r14) : false;
}
function l9() {
  let r14 = s9(), [e7, n14] = t10.useState(s.isHandoffComplete);
  return e7 && s.isHandoffComplete === false && n14(false), t10.useEffect(() => {
    e7 !== true && n14(true);
  }, [e7]), t10.useEffect(() => s.handoff(), []), r14 ? false : e7;
}

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react74 = __toESM(require_react(), 1);
var e6 = (0, import_react74.createContext)(false);
function a9() {
  return (0, import_react74.useContext)(e6);
}
function l10(o17) {
  return import_react74.default.createElement(e6.Provider, { value: o17.force }, o17.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function D4(p8) {
  let r14 = a9(), l15 = (0, import_react75.useContext)(v4), e7 = n9(p8), [o17, n14] = (0, import_react75.useState)(() => {
    var t15;
    if (!r14 && l15 !== null)
      return (t15 = l15.current) != null ? t15 : null;
    if (s.isServer)
      return null;
    let u16 = e7 == null ? void 0 : e7.getElementById("headlessui-portal-root");
    if (u16)
      return u16;
    if (e7 === null)
      return null;
    let a15 = e7.createElement("div");
    return a15.setAttribute("id", "headlessui-portal-root"), e7.body.appendChild(a15);
  });
  return (0, import_react75.useEffect)(() => {
    o17 !== null && (e7 != null && e7.body.contains(o17) || e7 == null || e7.body.appendChild(o17));
  }, [o17, e7]), (0, import_react75.useEffect)(() => {
    r14 || l15 !== null && n14(l15.current);
  }, [l15, n14, r14]), o17;
}
var M2 = import_react75.Fragment;
var N4 = I(function(r14, l15) {
  let e7 = r14, o17 = (0, import_react75.useRef)(null), n14 = y(T3((i11) => {
    o17.current = i11;
  }), l15), u16 = n9(o17), a15 = D4(o17), [t15] = (0, import_react75.useState)(() => {
    var i11;
    return s.isServer ? null : (i11 = u16 == null ? void 0 : u16.createElement("div")) != null ? i11 : null;
  }), s16 = (0, import_react75.useContext)(y5), b7 = l9();
  return n(() => {
    !a15 || !t15 || a15.contains(t15) || (t15.setAttribute("data-headlessui-portal", ""), a15.appendChild(t15));
  }, [a15, t15]), n(() => {
    if (t15 && s16)
      return s16.register(t15);
  }, [s16, t15]), c7(() => {
    var i11;
    !a15 || !t15 || (t15 instanceof Node && a15.contains(t15) && a15.removeChild(t15), a15.childNodes.length <= 0 && ((i11 = a15.parentElement) == null || i11.removeChild(a15)));
  }), b7 ? !a15 || !t15 ? null : (0, import_react_dom6.createPortal)(H({ ourProps: { ref: n14 }, theirProps: e7, slot: {}, defaultTag: M2, name: "Portal" }), t15) : null;
});
function S5(p8, r14) {
  let l15 = y(r14), { enabled: e7 = true, ...o17 } = p8;
  return e7 ? import_react75.default.createElement(N4, { ...o17, ref: l15 }) : H({ ourProps: { ref: l15 }, theirProps: o17, slot: {}, defaultTag: M2, name: "Portal" });
}
var j5 = import_react75.Fragment;
var v4 = (0, import_react75.createContext)(null);
function W3(p8, r14) {
  let { target: l15, ...e7 } = p8, n14 = { ref: y(r14) };
  return import_react75.default.createElement(v4.Provider, { value: l15 }, H({ ourProps: n14, theirProps: e7, defaultTag: j5, name: "Popover.Group" }));
}
var y5 = (0, import_react75.createContext)(null);
function ee() {
  let p8 = (0, import_react75.useContext)(y5), r14 = (0, import_react75.useRef)([]), l15 = o4((n14) => (r14.current.push(n14), p8 && p8.register(n14), () => e7(n14))), e7 = o4((n14) => {
    let u16 = r14.current.indexOf(n14);
    u16 !== -1 && r14.current.splice(u16, 1), p8 && p8.unregister(n14);
  }), o17 = (0, import_react75.useMemo)(() => ({ register: l15, unregister: e7, portals: r14 }), [l15, e7, r14]);
  return [r14, (0, import_react75.useMemo)(() => function({ children: u16 }) {
    return import_react75.default.createElement(y5.Provider, { value: o17 }, u16);
  }, [o17])];
}
var I4 = I(S5);
var J2 = I(W3);
var te = Object.assign(I4, { Group: J2 });

// node_modules/@headlessui/react/dist/components/combobox/combobox.js
var fo = ((e7) => (e7[e7.Open = 0] = "Open", e7[e7.Closed = 1] = "Closed", e7))(fo || {});
var mo = ((e7) => (e7[e7.Single = 0] = "Single", e7[e7.Multi = 1] = "Multi", e7))(mo || {});
var xo = ((t15) => (t15[t15.Pointer = 0] = "Pointer", t15[t15.Focus = 1] = "Focus", t15[t15.Other = 2] = "Other", t15))(xo || {});
var To = ((i11) => (i11[i11.OpenCombobox = 0] = "OpenCombobox", i11[i11.CloseCombobox = 1] = "CloseCombobox", i11[i11.GoToOption = 2] = "GoToOption", i11[i11.RegisterOption = 3] = "RegisterOption", i11[i11.UnregisterOption = 4] = "UnregisterOption", i11[i11.SetActivationTrigger = 5] = "SetActivationTrigger", i11[i11.UpdateVirtualOptions = 6] = "UpdateVirtualOptions", i11))(To || {});
function xe2(o17, r14 = (e7) => e7) {
  let e7 = o17.activeOptionIndex !== null ? o17.options[o17.activeOptionIndex] : null, t15 = r14(o17.options.slice()), p8 = t15.length > 0 && t15[0].dataRef.current.order !== null ? t15.sort((b7, i11) => b7.dataRef.current.order - i11.dataRef.current.order) : _2(t15, (b7) => b7.dataRef.current.domRef.current), f21 = e7 ? p8.indexOf(e7) : null;
  return f21 === -1 && (f21 = null), { options: p8, activeOptionIndex: f21 };
}
var go = { [1](o17) {
  var r14;
  return (r14 = o17.dataRef.current) != null && r14.disabled || o17.comboboxState === 1 ? o17 : { ...o17, activeOptionIndex: null, comboboxState: 1, activationTrigger: 2, __demoMode: false };
}, [0](o17) {
  var r14, e7;
  if ((r14 = o17.dataRef.current) != null && r14.disabled || o17.comboboxState === 0)
    return o17;
  if ((e7 = o17.dataRef.current) != null && e7.value) {
    let t15 = o17.dataRef.current.calculateIndex(o17.dataRef.current.value);
    if (t15 !== -1)
      return { ...o17, activeOptionIndex: t15, comboboxState: 0, __demoMode: false };
  }
  return { ...o17, comboboxState: 0, __demoMode: false };
}, [2](o17, r14) {
  var f21, b7, i11, m13, n14;
  if ((f21 = o17.dataRef.current) != null && f21.disabled || (b7 = o17.dataRef.current) != null && b7.optionsRef.current && !((i11 = o17.dataRef.current) != null && i11.optionsPropsRef.current.static) && o17.comboboxState === 1)
    return o17;
  if (o17.virtual) {
    let u16 = r14.focus === c6.Specific ? r14.idx : f13(r14, { resolveItems: () => o17.virtual.options, resolveActiveIndex: () => {
      var A6, _7;
      return (_7 = (A6 = o17.activeOptionIndex) != null ? A6 : o17.virtual.options.findIndex((s16) => !o17.virtual.disabled(s16))) != null ? _7 : null;
    }, resolveDisabled: o17.virtual.disabled, resolveId() {
      throw new Error("Function not implemented.");
    } }), c13 = (m13 = r14.trigger) != null ? m13 : 2;
    return o17.activeOptionIndex === u16 && o17.activationTrigger === c13 ? o17 : { ...o17, activeOptionIndex: u16, activationTrigger: c13, __demoMode: false };
  }
  let e7 = xe2(o17);
  if (e7.activeOptionIndex === null) {
    let u16 = e7.options.findIndex((c13) => !c13.dataRef.current.disabled);
    u16 !== -1 && (e7.activeOptionIndex = u16);
  }
  let t15 = r14.focus === c6.Specific ? r14.idx : f13(r14, { resolveItems: () => e7.options, resolveActiveIndex: () => e7.activeOptionIndex, resolveId: (u16) => u16.id, resolveDisabled: (u16) => u16.dataRef.current.disabled }), p8 = (n14 = r14.trigger) != null ? n14 : 2;
  return o17.activeOptionIndex === t15 && o17.activationTrigger === p8 ? o17 : { ...o17, ...e7, activeOptionIndex: t15, activationTrigger: p8, __demoMode: false };
}, [3]: (o17, r14) => {
  var f21, b7, i11;
  if ((f21 = o17.dataRef.current) != null && f21.virtual)
    return { ...o17, options: [...o17.options, r14.payload] };
  let e7 = r14.payload, t15 = xe2(o17, (m13) => (m13.push(e7), m13));
  o17.activeOptionIndex === null && (b7 = o17.dataRef.current) != null && b7.isSelected(r14.payload.dataRef.current.value) && (t15.activeOptionIndex = t15.options.indexOf(e7));
  let p8 = { ...o17, ...t15, activationTrigger: 2 };
  return (i11 = o17.dataRef.current) != null && i11.__demoMode && o17.dataRef.current.value === void 0 && (p8.activeOptionIndex = 0), p8;
}, [4]: (o17, r14) => {
  var t15;
  if ((t15 = o17.dataRef.current) != null && t15.virtual)
    return { ...o17, options: o17.options.filter((p8) => p8.id !== r14.id) };
  let e7 = xe2(o17, (p8) => {
    let f21 = p8.findIndex((b7) => b7.id === r14.id);
    return f21 !== -1 && p8.splice(f21, 1), p8;
  });
  return { ...o17, ...e7, activationTrigger: 2 };
}, [5]: (o17, r14) => o17.activationTrigger === r14.trigger ? o17 : { ...o17, activationTrigger: r14.trigger }, [6]: (o17, r14) => {
  var t15;
  if (((t15 = o17.virtual) == null ? void 0 : t15.options) === r14.options)
    return o17;
  let e7 = o17.activeOptionIndex;
  if (o17.activeOptionIndex !== null) {
    let p8 = r14.options.indexOf(o17.virtual.options[o17.activeOptionIndex]);
    p8 !== -1 ? e7 = p8 : e7 = null;
  }
  return { ...o17, activeOptionIndex: e7, virtual: Object.assign({}, o17.virtual, { options: r14.options }) };
} };
var Te = (0, import_react76.createContext)(null);
Te.displayName = "ComboboxActionsContext";
function ee2(o17) {
  let r14 = (0, import_react76.useContext)(Te);
  if (r14 === null) {
    let e7 = new Error(`<${o17} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e7, ee2), e7;
  }
  return r14;
}
var Ve = (0, import_react76.createContext)(null);
function vo(o17) {
  var m13;
  let r14 = Y("VirtualProvider"), [e7, t15] = (0, import_react76.useMemo)(() => {
    let n14 = r14.optionsRef.current;
    if (!n14)
      return [0, 0];
    let u16 = window.getComputedStyle(n14);
    return [parseFloat(u16.paddingBlockStart || u16.paddingTop), parseFloat(u16.paddingBlockEnd || u16.paddingBottom)];
  }, [r14.optionsRef.current]), p8 = useVirtualizer({ scrollPaddingStart: e7, scrollPaddingEnd: t15, count: r14.virtual.options.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    var n14;
    return (n14 = r14.optionsRef.current) != null ? n14 : null;
  }, overscan: 12 }), [f21, b7] = (0, import_react76.useState)(0);
  n(() => {
    b7((n14) => n14 + 1);
  }, [(m13 = r14.virtual) == null ? void 0 : m13.options]);
  let i11 = p8.getVirtualItems();
  return i11.length === 0 ? null : import_react76.default.createElement(Ve.Provider, { value: p8 }, import_react76.default.createElement("div", { style: { position: "relative", width: "100%", height: `${p8.getTotalSize()}px` }, ref: (n14) => {
    if (n14) {
      if (typeof process != "undefined" && process.env.JEST_WORKER_ID !== void 0 || r14.activationTrigger === 0)
        return;
      r14.activeOptionIndex !== null && r14.virtual.options.length > r14.activeOptionIndex && p8.scrollToIndex(r14.activeOptionIndex);
    }
  } }, i11.map((n14) => {
    var u16;
    return import_react76.default.createElement(import_react76.Fragment, { key: n14.key }, import_react76.default.cloneElement((u16 = o17.children) == null ? void 0 : u16.call(o17, { option: r14.virtual.options[n14.index], open: r14.comboboxState === 0 }), { key: `${f21}-${n14.key}`, "data-index": n14.index, "aria-setsize": r14.virtual.options.length, "aria-posinset": n14.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${n14.start}px)`, overflowAnchor: "none" } }));
  })));
}
var ue2 = (0, import_react76.createContext)(null);
ue2.displayName = "ComboboxDataContext";
function Y(o17) {
  let r14 = (0, import_react76.useContext)(ue2);
  if (r14 === null) {
    let e7 = new Error(`<${o17} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e7, Y), e7;
  }
  return r14;
}
function Oo(o17, r14) {
  return u2(r14.type, go, o17, r14);
}
var Co = import_react76.Fragment;
function yo(o17, r14) {
  var R8, h7;
  let e7 = a3(), { value: t15, defaultValue: p8, onChange: f21, form: b7, name: i11, by: m13, disabled: n14 = e7 || false, onClose: u16, __demoMode: c13 = false, multiple: A6 = false, immediate: _7 = false, virtual: s16 = null, nullable: T12, ...w10 } = o17, [C7 = A6 ? [] : void 0, v7] = T(t15, f21, p8), [y9, E12] = (0, import_react76.useReducer)(Oo, { dataRef: (0, import_react76.createRef)(), comboboxState: c13 ? 0 : 1, options: [], virtual: s16 ? { options: s16.options, disabled: (R8 = s16.disabled) != null ? R8 : () => false } : null, activeOptionIndex: null, activationTrigger: 2, __demoMode: c13 }), F6 = (0, import_react76.useRef)(false), N5 = (0, import_react76.useRef)({ static: false, hold: false }), V5 = (0, import_react76.useRef)(null), O3 = (0, import_react76.useRef)(null), W7 = (0, import_react76.useRef)(null), L9 = u8(m13), P7 = o4((d15) => s16 ? m13 === null ? s16.options.indexOf(d15) : s16.options.findIndex((g7) => L9(g7, d15)) : y9.options.findIndex((g7) => L9(g7.dataRef.current.value, d15))), $5 = (0, import_react76.useCallback)((d15) => u2(a15.mode, { [1]: () => C7.some((g7) => L9(g7, d15)), [0]: () => L9(C7, d15) }), [C7]), z7 = o4((d15) => y9.activeOptionIndex === P7(d15)), a15 = (0, import_react76.useMemo)(() => ({ ...y9, immediate: _7, optionsPropsRef: N5, inputRef: V5, buttonRef: O3, optionsRef: W7, value: C7, defaultValue: p8, disabled: n14, mode: A6 ? 1 : 0, virtual: y9.virtual, get activeOptionIndex() {
    if (F6.current && y9.activeOptionIndex === null && (s16 ? s16.options.length > 0 : y9.options.length > 0)) {
      if (s16) {
        let g7 = s16.options.findIndex((U6) => {
          var re2, ge3;
          return !((ge3 = (re2 = s16 == null ? void 0 : s16.disabled) == null ? void 0 : re2.call(s16, U6)) != null && ge3);
        });
        if (g7 !== -1)
          return g7;
      }
      let d15 = y9.options.findIndex((g7) => !g7.dataRef.current.disabled);
      if (d15 !== -1)
        return d15;
    }
    return y9.activeOptionIndex;
  }, calculateIndex: P7, compare: L9, isSelected: $5, isActive: z7 }), [C7, p8, n14, A6, c13, y9, s16]);
  n(() => {
    s16 && E12({ type: 6, options: s16.options });
  }, [s16, s16 == null ? void 0 : s16.options]), n(() => {
    y9.dataRef.current = a15;
  }, [a15]), w6([a15.buttonRef, a15.inputRef, a15.optionsRef], () => J6.closeCombobox(), a15.comboboxState === 0);
  let H10 = (0, import_react76.useMemo)(() => {
    var d15, g7, U6;
    return { open: a15.comboboxState === 0, disabled: n14, activeIndex: a15.activeOptionIndex, activeOption: a15.activeOptionIndex === null ? null : a15.virtual ? a15.virtual.options[(d15 = a15.activeOptionIndex) != null ? d15 : 0] : (U6 = (g7 = a15.options[a15.activeOptionIndex]) == null ? void 0 : g7.dataRef.current.value) != null ? U6 : null, value: C7 };
  }, [a15, n14, C7]), pe5 = o4(() => {
    if (a15.activeOptionIndex !== null) {
      if (a15.virtual)
        X3(a15.virtual.options[a15.activeOptionIndex]);
      else {
        let { dataRef: d15 } = a15.options[a15.activeOptionIndex];
        X3(d15.current.value);
      }
      J6.goToOption(c6.Specific, a15.activeOptionIndex);
    }
  }), se4 = o4(() => {
    E12({ type: 0 }), F6.current = true;
  }), de5 = o4(() => {
    E12({ type: 1 }), F6.current = false, u16 == null || u16();
  }), oe2 = o4((d15, g7, U6) => (F6.current = false, d15 === c6.Specific ? E12({ type: 2, focus: c6.Specific, idx: g7, trigger: U6 }) : E12({ type: 2, focus: d15, trigger: U6 }))), te4 = o4((d15, g7) => (E12({ type: 3, payload: { id: d15, dataRef: g7 } }), () => {
    a15.isActive(g7.current.value) && (F6.current = true), E12({ type: 4, id: d15 });
  })), X3 = o4((d15) => u2(a15.mode, { [0]() {
    return v7 == null ? void 0 : v7(d15);
  }, [1]() {
    let g7 = a15.value.slice(), U6 = g7.findIndex((re2) => L9(re2, d15));
    return U6 === -1 ? g7.push(d15) : g7.splice(U6, 1), v7 == null ? void 0 : v7(g7);
  } })), ne3 = o4((d15) => {
    E12({ type: 5, trigger: d15 });
  }), J6 = (0, import_react76.useMemo)(() => ({ onChange: X3, registerOption: te4, goToOption: oe2, closeCombobox: de5, openCombobox: se4, setActivationTrigger: ne3, selectActiveOption: pe5 }), []), [l15, B4] = z(), I5 = r14 === null ? {} : { ref: r14 }, k4 = (0, import_react76.useCallback)(() => v7 == null ? void 0 : v7(p8), [v7]);
  return import_react76.default.createElement(B4, { value: l15, props: { htmlFor: (h7 = a15.inputRef.current) == null ? void 0 : h7.id }, slot: { open: a15.comboboxState === 0, disabled: n14 } }, import_react76.default.createElement(ve2, null, import_react76.default.createElement(Te.Provider, { value: J6 }, import_react76.default.createElement(ue2.Provider, { value: a15 }, import_react76.default.createElement(s8, { value: u2(a15.comboboxState, { [0]: d9.Open, [1]: d9.Closed }) }, i11 != null && import_react76.default.createElement(j2, { disabled: n14, data: C7 != null ? { [i11]: C7 } : {}, form: b7, onReset: k4 }), H({ ourProps: I5, theirProps: w10, slot: H10, defaultTag: Co, name: "Combobox" }))))));
}
var Ro = "input";
function So(o17, r14) {
  var oe2, te4, X3, ne3, J6;
  let e7 = Y("Combobox.Input"), t15 = ee2("Combobox.Input"), p8 = (0, import_react45.useId)(), f21 = u4(), { id: b7 = f21 || `headlessui-combobox-input-${p8}`, onChange: i11, displayValue: m13, disabled: n14 = e7.disabled || false, autoFocus: u16 = false, type: c13 = "text", ...A6 } = o17, _7 = y(e7.inputRef, r14, ye()), s16 = n9(e7.inputRef), T12 = (0, import_react76.useRef)(false), w10 = p(), C7 = o4(() => {
    t15.onChange(null), e7.optionsRef.current && (e7.optionsRef.current.scrollTop = 0), t15.goToOption(c6.Nothing);
  }), v7 = (0, import_react76.useMemo)(() => {
    var l15;
    return typeof m13 == "function" && e7.value !== void 0 ? (l15 = m13(e7.value)) != null ? l15 : "" : typeof e7.value == "string" ? e7.value : "";
  }, [e7.value, m13]);
  m10(([l15, B4], [I5, k4]) => {
    if (T12.current)
      return;
    let R8 = e7.inputRef.current;
    R8 && ((k4 === 0 && B4 === 1 || l15 !== I5) && (R8.value = l15), requestAnimationFrame(() => {
      if (T12.current || !R8 || (s16 == null ? void 0 : s16.activeElement) !== R8)
        return;
      let { selectionStart: h7, selectionEnd: d15 } = R8;
      Math.abs((d15 != null ? d15 : 0) - (h7 != null ? h7 : 0)) === 0 && h7 === 0 && R8.setSelectionRange(R8.value.length, R8.value.length);
    }));
  }, [v7, e7.comboboxState, s16]), m10(([l15], [B4]) => {
    if (l15 === 0 && B4 === 1) {
      if (T12.current)
        return;
      let I5 = e7.inputRef.current;
      if (!I5)
        return;
      let k4 = I5.value, { selectionStart: R8, selectionEnd: h7, selectionDirection: d15 } = I5;
      I5.value = "", I5.value = k4, d15 !== null ? I5.setSelectionRange(R8, h7, d15) : I5.setSelectionRange(R8, h7);
    }
  }, [e7.comboboxState]);
  let y9 = (0, import_react76.useRef)(false), E12 = o4(() => {
    y9.current = true;
  }), F6 = o4(() => {
    w10.nextFrame(() => {
      y9.current = false;
    });
  }), N5 = m5(), V5 = o4((l15) => {
    switch (T12.current = true, N5(() => {
      T12.current = false;
    }), l15.key) {
      case o8.Enter:
        if (T12.current = false, e7.comboboxState !== 0 || y9.current)
          return;
        if (l15.preventDefault(), l15.stopPropagation(), e7.activeOptionIndex === null) {
          t15.closeCombobox();
          return;
        }
        t15.selectActiveOption(), e7.mode === 0 && t15.closeCombobox();
        break;
      case o8.ArrowDown:
        return T12.current = false, l15.preventDefault(), l15.stopPropagation(), u2(e7.comboboxState, { [0]: () => t15.goToOption(c6.Next), [1]: () => t15.openCombobox() });
      case o8.ArrowUp:
        return T12.current = false, l15.preventDefault(), l15.stopPropagation(), u2(e7.comboboxState, { [0]: () => t15.goToOption(c6.Previous), [1]: () => {
          t15.openCombobox(), w10.nextFrame(() => {
            e7.value || t15.goToOption(c6.Last);
          });
        } });
      case o8.Home:
        if (l15.shiftKey)
          break;
        return T12.current = false, l15.preventDefault(), l15.stopPropagation(), t15.goToOption(c6.First);
      case o8.PageUp:
        return T12.current = false, l15.preventDefault(), l15.stopPropagation(), t15.goToOption(c6.First);
      case o8.End:
        if (l15.shiftKey)
          break;
        return T12.current = false, l15.preventDefault(), l15.stopPropagation(), t15.goToOption(c6.Last);
      case o8.PageDown:
        return T12.current = false, l15.preventDefault(), l15.stopPropagation(), t15.goToOption(c6.Last);
      case o8.Escape:
        return T12.current = false, e7.comboboxState !== 0 ? void 0 : (l15.preventDefault(), e7.optionsRef.current && !e7.optionsPropsRef.current.static && l15.stopPropagation(), e7.mode === 0 && e7.value === null && C7(), t15.closeCombobox());
      case o8.Tab:
        if (T12.current = false, e7.comboboxState !== 0)
          return;
        e7.mode === 0 && e7.activationTrigger !== 1 && t15.selectActiveOption(), t15.closeCombobox();
        break;
    }
  }), O3 = o4((l15) => {
    i11 == null || i11(l15), e7.mode === 0 && l15.target.value === "" && C7(), t15.openCombobox();
  }), W7 = o4((l15) => {
    var I5, k4, R8;
    let B4 = (I5 = l15.relatedTarget) != null ? I5 : t9.find((h7) => h7 !== l15.currentTarget);
    if (T12.current = false, !((k4 = e7.optionsRef.current) != null && k4.contains(B4)) && !((R8 = e7.buttonRef.current) != null && R8.contains(B4)) && e7.comboboxState === 0)
      return l15.preventDefault(), e7.mode === 0 && e7.value === null && C7(), t15.closeCombobox();
  }), L9 = o4((l15) => {
    var I5, k4, R8;
    let B4 = (I5 = l15.relatedTarget) != null ? I5 : t9.find((h7) => h7 !== l15.currentTarget);
    (k4 = e7.buttonRef.current) != null && k4.contains(B4) || (R8 = e7.optionsRef.current) != null && R8.contains(B4) || e7.disabled || e7.immediate && e7.comboboxState !== 0 && (t15.openCombobox(), w10.nextFrame(() => {
      t15.setActivationTrigger(1);
    }));
  }), P7 = I2(), $5 = G(), { isFocused: z7, focusProps: a15 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: u16 }), { isHovered: H10, hoverProps: pe5 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: n14 }), se4 = (0, import_react76.useMemo)(() => ({ open: e7.comboboxState === 0, disabled: n14, hover: H10, focus: z7, autofocus: u16 }), [e7, H10, z7, u16, n14]), de5 = D({ ref: _7, id: b7, role: "combobox", type: c13, "aria-controls": (oe2 = e7.optionsRef.current) == null ? void 0 : oe2.id, "aria-expanded": e7.comboboxState === 0, "aria-activedescendant": e7.activeOptionIndex === null ? void 0 : e7.virtual ? (te4 = e7.options.find((l15) => !l15.dataRef.current.disabled && e7.compare(l15.dataRef.current.value, e7.virtual.options[e7.activeOptionIndex]))) == null ? void 0 : te4.id : (X3 = e7.options[e7.activeOptionIndex]) == null ? void 0 : X3.id, "aria-labelledby": P7, "aria-describedby": $5, "aria-autocomplete": "list", defaultValue: (J6 = (ne3 = o17.defaultValue) != null ? ne3 : e7.defaultValue !== void 0 ? m13 == null ? void 0 : m13(e7.defaultValue) : null) != null ? J6 : e7.defaultValue, disabled: n14 || void 0, autoFocus: u16, onCompositionStart: E12, onCompositionEnd: F6, onKeyDown: V5, onChange: O3, onFocus: L9, onBlur: W7 }, a15, pe5);
  return H({ ourProps: de5, theirProps: A6, slot: se4, defaultTag: Ro, name: "Combobox.Input" });
}
var Po = "button";
function Io(o17, r14) {
  var V5;
  let e7 = Y("Combobox.Button"), t15 = ee2("Combobox.Button"), p8 = y(e7.buttonRef, r14), f21 = (0, import_react45.useId)(), { id: b7 = `headlessui-combobox-button-${f21}`, disabled: i11 = e7.disabled || false, autoFocus: m13 = false, ...n14 } = o17, u16 = p(), c13 = f11(e7.inputRef), A6 = o4((O3) => {
    switch (O3.key) {
      case o8.Space:
      case o8.Enter:
        return O3.preventDefault(), O3.stopPropagation(), e7.comboboxState === 1 && t15.openCombobox(), u16.nextFrame(() => c13());
      case o8.ArrowDown:
        return O3.preventDefault(), O3.stopPropagation(), e7.comboboxState === 1 && (t15.openCombobox(), u16.nextFrame(() => {
          e7.value || t15.goToOption(c6.First);
        })), u16.nextFrame(() => c13());
      case o8.ArrowUp:
        return O3.preventDefault(), O3.stopPropagation(), e7.comboboxState === 1 && (t15.openCombobox(), u16.nextFrame(() => {
          e7.value || t15.goToOption(c6.Last);
        })), u16.nextFrame(() => c13());
      case o8.Escape:
        return e7.comboboxState !== 0 ? void 0 : (O3.preventDefault(), e7.optionsRef.current && !e7.optionsPropsRef.current.static && O3.stopPropagation(), t15.closeCombobox(), u16.nextFrame(() => c13()));
      default:
        return;
    }
  }), _7 = o4((O3) => {
    O3.preventDefault(), !r5(O3.currentTarget) && (O3.button === g2.Left && (e7.comboboxState === 0 ? t15.closeCombobox() : t15.openCombobox()), c13());
  }), s16 = I2([b7]), { isFocusVisible: T12, focusProps: w10 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: m13 }), { isHovered: C7, hoverProps: v7 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: i11 }), { pressed: y9, pressProps: E12 } = w({ disabled: i11 }), F6 = (0, import_react76.useMemo)(() => ({ open: e7.comboboxState === 0, active: y9 || e7.comboboxState === 0, disabled: i11, value: e7.value, hover: C7, focus: T12 }), [e7, C7, T12, y9, i11]), N5 = D({ ref: p8, id: b7, type: T8(o17, e7.buttonRef), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (V5 = e7.optionsRef.current) == null ? void 0 : V5.id, "aria-expanded": e7.comboboxState === 0, "aria-labelledby": s16, disabled: i11 || void 0, autoFocus: m13, onMouseDown: _7, onKeyDown: A6 }, w10, v7, E12);
  return H({ ourProps: N5, theirProps: n14, slot: F6, defaultTag: Po, name: "Combobox.Button" });
}
var Ao = "div";
var Eo = O.RenderStrategy | O.Static;
function _o(o17, r14) {
  var L9;
  let e7 = (0, import_react45.useId)(), { id: t15 = `headlessui-combobox-options-${e7}`, hold: p8 = false, anchor: f21, portal: b7 = false, modal: i11 = true, ...m13 } = o17, n14 = Y("Combobox.Options"), u16 = ee2("Combobox.Options"), c13 = xe(f21);
  c13 && (b7 = true);
  let [A6, _7] = Re(c13), s16 = be(), T12 = y(n14.optionsRef, r14, c13 ? A6 : null), w10 = n9(n14.optionsRef), C7 = u12(), v7 = (() => C7 !== null ? (C7 & d9.Open) === d9.Open : n14.comboboxState === 0)();
  m6(n14.inputRef, u16.closeCombobox, v7), u10(w10, n14.__demoMode ? false : i11 && n14.comboboxState === 0), T6({ allowed: o4(() => [n14.inputRef.current, n14.buttonRef.current, n14.optionsRef.current]) }, n14.__demoMode ? false : i11 && n14.comboboxState === 0), n(() => {
    var P7;
    n14.optionsPropsRef.current.static = (P7 = o17.static) != null ? P7 : false;
  }, [n14.optionsPropsRef, o17.static]), n(() => {
    n14.optionsPropsRef.current.hold = p8;
  }, [n14.optionsPropsRef, p8]), F2({ container: n14.optionsRef.current, enabled: n14.comboboxState === 0, accept(P7) {
    return P7.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : P7.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(P7) {
    P7.setAttribute("role", "none");
  } });
  let y9 = I2([(L9 = n14.buttonRef.current) == null ? void 0 : L9.id]), E12 = (0, import_react76.useMemo)(() => ({ open: n14.comboboxState === 0, option: void 0 }), [n14]), F6 = o4(() => {
    u16.setActivationTrigger(0);
  }), N5 = D(c13 ? s16() : {}, { "aria-labelledby": y9, role: "listbox", "aria-multiselectable": n14.mode === 1 ? true : void 0, id: t15, ref: T12, style: { ..._7, "--input-width": f7(n14.inputRef, true).width, "--button-width": f7(n14.buttonRef, true).width }, onWheel: F6 });
  n14.virtual && v7 && Object.assign(m13, { children: import_react76.default.createElement(vo, null, m13.children) });
  let [V5, O3] = (0, import_react76.useState)(n14.value);
  n14.value !== V5 && n14.comboboxState === 0 && n14.mode !== 1 && O3(n14.value);
  let W7 = o4((P7) => n14.compare(V5, P7));
  return import_react76.default.createElement(te, { enabled: b7 ? o17.static || v7 : false }, import_react76.default.createElement(ue2.Provider, { value: n14.mode === 1 ? n14 : { ...n14, isSelected: W7 } }, H({ ourProps: N5, theirProps: m13, slot: E12, defaultTag: Ao, features: Eo, visible: v7, name: "Combobox.Options" })));
}
var Fo = "div";
function ho(o17, r14) {
  var P7, $5, z7;
  let e7 = Y("Combobox.Option"), t15 = ee2("Combobox.Option"), p8 = (0, import_react45.useId)(), { id: f21 = `headlessui-combobox-option-${p8}`, value: b7, disabled: i11 = ($5 = (P7 = e7.virtual) == null ? void 0 : P7.disabled(b7)) != null ? $5 : false, order: m13 = null, ...n14 } = o17, u16 = f11(e7.inputRef), c13 = e7.virtual ? e7.activeOptionIndex === e7.calculateIndex(b7) : e7.activeOptionIndex === null ? false : ((z7 = e7.options[e7.activeOptionIndex]) == null ? void 0 : z7.id) === f21, A6 = e7.isSelected(b7), _7 = (0, import_react76.useRef)(null), s16 = s3({ disabled: i11, value: b7, domRef: _7, order: m13 }), T12 = (0, import_react76.useContext)(Ve), w10 = y(r14, _7, T12 ? T12.measureElement : null), C7 = o4(() => t15.onChange(b7));
  n(() => t15.registerOption(f21, s16), [s16, f21]);
  let v7 = (0, import_react76.useRef)(!(e7.virtual || e7.__demoMode));
  n(() => {
    if (!e7.virtual && !e7.__demoMode)
      return o2().requestAnimationFrame(() => {
        v7.current = true;
      });
  }, [e7.virtual, e7.__demoMode]), n(() => {
    if (v7.current && e7.comboboxState === 0 && c13 && e7.activationTrigger !== 0)
      return o2().requestAnimationFrame(() => {
        var a15, H10;
        (H10 = (a15 = _7.current) == null ? void 0 : a15.scrollIntoView) == null || H10.call(a15, { block: "nearest" });
      });
  }, [_7, c13, e7.comboboxState, e7.activationTrigger, e7.activeOptionIndex]);
  let y9 = o4((a15) => {
    a15.preventDefault(), a15.button === g2.Left && (i11 || (C7(), n8() || requestAnimationFrame(() => u16()), e7.mode === 0 && t15.closeCombobox()));
  }), E12 = o4(() => {
    if (i11)
      return t15.goToOption(c6.Nothing);
    let a15 = e7.calculateIndex(b7);
    t15.goToOption(c6.Specific, a15);
  }), F6 = u11(), N5 = o4((a15) => F6.update(a15)), V5 = o4((a15) => {
    if (!F6.wasMoved(a15) || i11 || c13)
      return;
    let H10 = e7.calculateIndex(b7);
    t15.goToOption(c6.Specific, H10, 0);
  }), O3 = o4((a15) => {
    F6.wasMoved(a15) && (i11 || c13 && (e7.optionsPropsRef.current.hold || t15.goToOption(c6.Nothing)));
  }), W7 = (0, import_react76.useMemo)(() => ({ active: c13, focus: c13, selected: A6, disabled: i11 }), [c13, A6, i11]);
  return H({ ourProps: { id: f21, ref: w10, role: "option", tabIndex: i11 === true ? void 0 : -1, "aria-disabled": i11 === true ? true : void 0, "aria-selected": A6, disabled: void 0, onMouseDown: y9, onFocus: E12, onPointerEnter: N5, onMouseEnter: N5, onPointerMove: V5, onMouseMove: V5, onPointerLeave: O3, onMouseLeave: O3 }, theirProps: n14, slot: W7, defaultTag: Fo, name: "Combobox.Option" });
}
var Mo = I(yo);
var Do = I(Io);
var Vo = I(So);
var Lo = K;
var wo = I(_o);
var Bo = I(ho);
var Et = Object.assign(Mo, { Input: Vo, Button: Do, Label: Lo, Options: wo, Option: Bo });

// node_modules/@headlessui/react/dist/components/data-interactive/data-interactive.js
var import_react77 = __toESM(require_react(), 1);
var E9 = import_react77.Fragment;
function _4(o17, n14) {
  let { ...p8 } = o17, e7 = false, { isFocusVisible: t15, focusProps: s16 } = $f7dceffc5ad7768b$export$4e328f61c538687f(), { isHovered: r14, hoverProps: i11 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e7 }), { pressed: a15, pressProps: T12 } = w({ disabled: e7 }), l15 = D({ ref: n14 }, s16, i11, T12), m13 = (0, import_react77.useMemo)(() => ({ hover: r14, focus: t15, active: a15 }), [r14, t15, a15]);
  return H({ ourProps: l15, theirProps: p8, slot: m13, defaultTag: E9, name: "DataInteractive" });
}
var C3 = I(_4);

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react84 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-is-touch-device.js
var import_react78 = __toESM(require_react(), 1);
function f16() {
  var t15;
  let [e7] = (0, import_react78.useState)(() => typeof window != "undefined" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [o17, c13] = (0, import_react78.useState)((t15 = e7 == null ? void 0 : e7.matches) != null ? t15 : false);
  return n(() => {
    if (!e7)
      return;
    function n14(r14) {
      c13(r14.matches);
    }
    return e7.addEventListener("change", n14), () => e7.removeEventListener("change", n14);
  }, [e7]), o17;
}

// node_modules/@headlessui/react/dist/hooks/use-root-containers.js
var import_react79 = __toESM(require_react(), 1);
function j7({ defaultContainers: o17 = [], portals: r14, mainTreeNodeRef: u16 } = {}) {
  var f21;
  let t15 = (0, import_react79.useRef)((f21 = u16 == null ? void 0 : u16.current) != null ? f21 : null), l15 = n9(t15), c13 = o4(() => {
    var i11, s16, a15;
    let n14 = [];
    for (let e7 of o17)
      e7 !== null && (e7 instanceof HTMLElement ? n14.push(e7) : "current" in e7 && e7.current instanceof HTMLElement && n14.push(e7.current));
    if (r14 != null && r14.current)
      for (let e7 of r14.current)
        n14.push(e7);
    for (let e7 of (i11 = l15 == null ? void 0 : l15.querySelectorAll("html > *, body > *")) != null ? i11 : [])
      e7 !== document.body && e7 !== document.head && e7 instanceof HTMLElement && e7.id !== "headlessui-portal-root" && (e7.contains(t15.current) || e7.contains((a15 = (s16 = t15.current) == null ? void 0 : s16.getRootNode()) == null ? void 0 : a15.host) || n14.some((L9) => e7.contains(L9)) || n14.push(e7));
    return n14;
  });
  return { resolveContainers: c13, contains: o4((n14) => c13().some((i11) => i11.contains(n14))), mainTreeNodeRef: t15, MainTreeNode: (0, import_react79.useMemo)(() => function() {
    return u16 != null ? null : import_react79.default.createElement(T2, { features: s4.Hidden, ref: t15 });
  }, [t15, u16]) };
}
function y6() {
  let o17 = (0, import_react79.useRef)(null);
  return { mainTreeNodeRef: o17, MainTreeNode: (0, import_react79.useMemo)(() => function() {
    return import_react79.default.createElement(T2, { features: s4.Hidden, ref: o17 });
  }, [o17]) };
}

// node_modules/@headlessui/react/dist/internal/stack-context.js
var import_react80 = __toESM(require_react(), 1);
var a10 = (0, import_react80.createContext)(() => {
});
a10.displayName = "StackContext";
var s10 = ((e7) => (e7[e7.Add = 0] = "Add", e7[e7.Remove = 1] = "Remove", e7))(s10 || {});
function x2() {
  return (0, import_react80.useContext)(a10);
}
function b3({ children: i11, onUpdate: r14, type: e7, element: n14, enabled: u16 }) {
  let l15 = x2(), o17 = o4((...t15) => {
    r14 == null || r14(...t15), l15(...t15);
  });
  return n(() => {
    let t15 = u16 === void 0 || u16 === true;
    return t15 && o17(0, e7, n14), () => {
      t15 && o17(1, e7, n14);
    };
  }, [o17, e7, n14, u16]), import_react80.default.createElement(a10.Provider, { value: o17 }, i11);
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react83 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react81 = __toESM(require_react(), 1);
function f17() {
  let e7 = (0, import_react81.useRef)(false);
  return n(() => (e7.current = true, () => {
    e7.current = false;
  }), []), e7;
}

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react82 = __toESM(require_react(), 1);
var s11 = ((r14) => (r14[r14.Forwards = 0] = "Forwards", r14[r14.Backwards = 1] = "Backwards", r14))(s11 || {});
function n12() {
  let e7 = (0, import_react82.useRef)(0);
  return s6("keydown", (o17) => {
    o17.key === "Tab" && (e7.current = o17.shiftKey ? 1 : 0);
  }, true), e7;
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function S6(t15) {
  if (!t15)
    return /* @__PURE__ */ new Set();
  if (typeof t15 == "function")
    return new Set(t15());
  let o17 = /* @__PURE__ */ new Set();
  for (let e7 of t15.current)
    e7.current instanceof HTMLElement && o17.add(e7.current);
  return o17;
}
var z2 = "div";
var h5 = ((r14) => (r14[r14.None = 1] = "None", r14[r14.InitialFocus = 2] = "InitialFocus", r14[r14.TabLock = 4] = "TabLock", r14[r14.FocusLock = 8] = "FocusLock", r14[r14.RestoreFocus = 16] = "RestoreFocus", r14[r14.AutoFocus = 32] = "AutoFocus", r14[r14.All = 30] = "All", r14))(h5 || {});
function Q(t15, o17) {
  let e7 = (0, import_react83.useRef)(null), n14 = y(e7, o17), { initialFocus: c13, initialFocusFallback: p8, containers: u16, features: r14 = 30, ...l15 } = t15;
  l9() || (r14 = 1);
  let s16 = n9(e7);
  $({ ownerDocument: s16 }, !!(r14 & 16));
  let U6 = D7({ ownerDocument: s16, container: e7, initialFocus: c13, initialFocusFallback: p8 }, r14);
  w7({ ownerDocument: s16, container: e7, containers: u16, previousActiveElement: U6 }, !!(r14 & 8));
  let b7 = n12(), A6 = o4((a15) => {
    let m13 = e7.current;
    if (!m13)
      return;
    ((N5) => N5())(() => {
      u2(b7.current, { [s11.Forwards]: () => {
        P5(m13, F.First, { skipElements: [a15.relatedTarget, p8] });
      }, [s11.Backwards]: () => {
        P5(m13, F.Last, { skipElements: [a15.relatedTarget, p8] });
      } });
    });
  }), B4 = p(), H10 = (0, import_react83.useRef)(false), x6 = { ref: n14, onKeyDown(a15) {
    a15.key == "Tab" && (H10.current = true, B4.requestAnimationFrame(() => {
      H10.current = false;
    }));
  }, onBlur(a15) {
    if (!(r14 & 8))
      return;
    let m13 = S6(u16);
    e7.current instanceof HTMLElement && m13.add(e7.current);
    let E12 = a15.relatedTarget;
    E12 instanceof HTMLElement && E12.dataset.headlessuiFocusGuard !== "true" && (j8(m13, E12) || (H10.current ? P5(e7.current, u2(b7.current, { [s11.Forwards]: () => F.Next, [s11.Backwards]: () => F.Previous }) | F.WrapAround, { relativeTo: a15.target }) : a15.target instanceof HTMLElement && I3(a15.target)));
  } };
  return import_react83.default.createElement(import_react83.default.Fragment, null, !!(r14 & 4) && import_react83.default.createElement(T2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: A6, features: s4.Focusable }), H({ ourProps: x6, theirProps: l15, defaultTag: z2, name: "FocusTrap" }), !!(r14 & 4) && import_react83.default.createElement(T2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: A6, features: s4.Focusable }));
}
var Y2 = I(Q);
var Le = Object.assign(Y2, { features: h5 });
function Z(t15 = true) {
  let o17 = (0, import_react83.useRef)(t9.slice());
  return m10(([e7], [n14]) => {
    n14 === true && e7 === false && t(() => {
      o17.current.splice(0);
    }), n14 === false && e7 === true && (o17.current = t9.slice());
  }, [t15, t9, o17]), o4(() => {
    var e7;
    return (e7 = o17.current.find((n14) => n14 != null && n14.isConnected)) != null ? e7 : null;
  });
}
function $({ ownerDocument: t15 }, o17) {
  let e7 = Z(o17);
  m10(() => {
    o17 || (t15 == null ? void 0 : t15.activeElement) === (t15 == null ? void 0 : t15.body) && I3(e7());
  }, [o17]), c7(() => {
    o17 && I3(e7());
  });
}
function D7({ ownerDocument: t15, container: o17, initialFocus: e7, initialFocusFallback: n14 }, c13) {
  let p8 = !!(c13 & 2), u16 = (0, import_react83.useRef)(null), r14 = f17();
  return m10(() => {
    if (!p8) {
      n14 != null && n14.current && I3(n14.current);
      return;
    }
    let l15 = o17.current;
    l15 && t(() => {
      if (!r14.current)
        return;
      let s16 = t15 == null ? void 0 : t15.activeElement;
      if (e7 != null && e7.current) {
        if ((e7 == null ? void 0 : e7.current) === s16) {
          u16.current = s16;
          return;
        }
      } else if (l15.contains(s16)) {
        u16.current = s16;
        return;
      }
      if (e7 != null && e7.current)
        I3(e7.current);
      else {
        if (c13 & 32) {
          if (P5(l15, F.First | F.AutoFocus) !== T7.Error)
            return;
        } else if (P5(l15, F.First) !== T7.Error)
          return;
        if (n14 != null && n14.current && (I3(n14.current), (t15 == null ? void 0 : t15.activeElement) === n14.current))
          return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      u16.current = t15 == null ? void 0 : t15.activeElement;
    });
  }, [n14, p8, c13]), u16;
}
function w7({ ownerDocument: t15, container: o17, containers: e7, previousActiveElement: n14 }, c13) {
  let p8 = f17();
  E5(t15 == null ? void 0 : t15.defaultView, "focus", (u16) => {
    if (!c13 || !p8.current)
      return;
    let r14 = S6(e7);
    o17.current instanceof HTMLElement && r14.add(o17.current);
    let l15 = n14.current;
    if (!l15)
      return;
    let s16 = u16.target;
    s16 && s16 instanceof HTMLElement ? j8(r14, s16) ? (n14.current = s16, I3(s16)) : (u16.preventDefault(), u16.stopPropagation(), I3(l15)) : I3(n14.current);
  }, true);
}
function j8(t15, o17) {
  for (let e7 of t15)
    if (e7.contains(o17))
      return true;
  return false;
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var He = ((r14) => (r14[r14.Open = 0] = "Open", r14[r14.Closed = 1] = "Closed", r14))(He || {});
var Ne = ((t15) => (t15[t15.SetTitleId = 0] = "SetTitleId", t15))(Ne || {});
var ke = { [0](o17, t15) {
  return o17.titleId === t15.id ? o17 : { ...o17, titleId: t15.id };
} };
var R5 = (0, import_react84.createContext)(null);
R5.displayName = "DialogContext";
function M4(o17) {
  let t15 = (0, import_react84.useContext)(R5);
  if (t15 === null) {
    let r14 = new Error(`<${o17} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r14, M4), r14;
  }
  return t15;
}
function Ue(o17, t15) {
  return u2(t15.type, ke, o17, t15);
}
var $e = "div";
var je = O.RenderStrategy | O.Static;
function We(o17, t15) {
  let r14 = (0, import_react45.useId)(), { id: u16 = `headlessui-dialog-${r14}`, open: i11, onClose: s16, initialFocus: d15, role: a15 = "dialog", autoFocus: c13 = true, __demoMode: T12 = false, ...G8 } = o17, [b7, H10] = (0, import_react84.useState)(0), N5 = (0, import_react84.useRef)(false);
  a15 = function() {
    return a15 === "dialog" || a15 === "alertdialog" ? a15 : (N5.current || (N5.current = true, console.warn(`Invalid role [${a15}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let P7 = u12();
  i11 === void 0 && P7 !== null && (i11 = (P7 & d9.Open) === d9.Open);
  let p8 = (0, import_react84.useRef)(null), z7 = y(p8, t15), y9 = n9(p8), k4 = o17.hasOwnProperty("open") || P7 !== null, U6 = o17.hasOwnProperty("onClose");
  if (!k4 && !U6)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!k4)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!U6)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof i11 != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${i11}`);
  if (typeof s16 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${s16}`);
  let n14 = i11 ? 0 : 1, [E12, Q5] = (0, import_react84.useReducer)(Ue, { titleId: null, descriptionId: null, panelRef: (0, import_react84.createRef)() }), m13 = o4(() => s16(false)), $5 = o4((e7) => Q5({ type: 0, id: e7 })), S7 = l9() ? n14 === 0 : false, C7 = b7 > 1, Z7 = (0, import_react84.useContext)(R5) !== null, [ee6, te4] = ee(), oe2 = { get current() {
    var e7;
    return (e7 = E12.panelRef.current) != null ? e7 : p8.current;
  } }, { resolveContainers: v7, mainTreeNodeRef: re2, MainTreeNode: le5 } = j7({ portals: ee6, defaultContainers: [oe2] }), ne3 = C7 ? "parent" : "leaf", j11 = P7 !== null ? (P7 & d9.Closing) === d9.Closing : false, ae6 = /* @__PURE__ */ (() => C7 || j11 ? false : S7)();
  T6({ allowed: o4(() => {
    var e7, f21;
    return [(f21 = (e7 = p8.current) == null ? void 0 : e7.closest("[data-headlessui-portal]")) != null ? f21 : null];
  }), disallowed: o4(() => {
    var e7, f21;
    return [(f21 = (e7 = re2.current) == null ? void 0 : e7.closest("body > *:not(#headlessui-portal-root)")) != null ? f21 : null];
  }) }, T12 ? false : ae6);
  let ie2 = /* @__PURE__ */ (() => !(!S7 || C7))();
  w6(v7, (e7) => {
    e7.preventDefault(), m13();
  }, ie2);
  let se4 = /* @__PURE__ */ (() => !(C7 || n14 !== 0))();
  E5(y9 == null ? void 0 : y9.defaultView, "keydown", (e7) => {
    se4 && (e7.defaultPrevented || e7.key === o8.Escape && (e7.preventDefault(), e7.stopPropagation(), m13()));
  });
  let pe5 = /* @__PURE__ */ (() => !(j11 || n14 !== 0 || Z7))();
  u10(y9, T12 ? false : pe5, v7), m6(p8, m13, n14 === 0);
  let [ue4, de5] = U2(), fe3 = (0, import_react84.useMemo)(() => [{ dialogState: n14, close: m13, setTitleId: $5 }, E12], [n14, E12, m13, $5]), W7 = (0, import_react84.useMemo)(() => ({ open: n14 === 0 }), [n14]), ge3 = { ref: z7, id: u16, role: a15, tabIndex: -1, "aria-modal": n14 === 0 ? true : void 0, "aria-labelledby": E12.titleId, "aria-describedby": ue4 }, Te3 = !f16(), A6 = S7 ? u2(ne3, { parent: h5.RestoreFocus, leaf: h5.All & ~h5.FocusLock }) : h5.None;
  return c13 && (A6 |= h5.AutoFocus), Te3 || (A6 &= ~h5.InitialFocus), T12 && (A6 = h5.None), import_react84.default.createElement(b3, { type: "Dialog", enabled: n14 === 0, element: p8, onUpdate: o4((e7, f21) => {
    f21 === "Dialog" && u2(e7, { [s10.Add]: () => H10((x6) => x6 + 1), [s10.Remove]: () => H10((x6) => x6 - 1) });
  }) }, import_react84.default.createElement(l10, { force: true }, import_react84.default.createElement(te, null, import_react84.default.createElement(R5.Provider, { value: fe3 }, import_react84.default.createElement(te.Group, { target: p8 }, import_react84.default.createElement(l10, { force: false }, import_react84.default.createElement(de5, { slot: W7, name: "Dialog.Description" }, import_react84.default.createElement(te4, null, import_react84.default.createElement(Le, { initialFocus: d15, initialFocusFallback: p8, containers: v7, features: A6 }, import_react84.default.createElement(u7, { value: m13 }, H({ ourProps: ge3, theirProps: G8, slot: W7, defaultTag: $e, features: je, visible: n14 === 0, name: "Dialog" })))))))))), import_react84.default.createElement(c2, null, import_react84.default.createElement(le5, null)));
}
var Ye = "div";
function Je(o17, t15) {
  let r14 = (0, import_react45.useId)(), { id: u16 = `headlessui-dialog-panel-${r14}`, ...i11 } = o17, [{ dialogState: s16 }, d15] = M4("Dialog.Panel"), a15 = y(t15, d15.panelRef), c13 = (0, import_react84.useMemo)(() => ({ open: s16 === 0 }), [s16]), T12 = o4((b7) => {
    b7.stopPropagation();
  });
  return H({ ourProps: { ref: a15, id: u16, onClick: T12 }, theirProps: i11, slot: c13, defaultTag: Ye, name: "Dialog.Panel" });
}
var Xe = "h2";
function Be2(o17, t15) {
  let r14 = (0, import_react45.useId)(), { id: u16 = `headlessui-dialog-title-${r14}`, ...i11 } = o17, [{ dialogState: s16, setTitleId: d15 }] = M4("Dialog.Title"), a15 = y(t15);
  (0, import_react84.useEffect)(() => (d15(u16), () => d15(null)), [u16, d15]);
  let c13 = (0, import_react84.useMemo)(() => ({ open: s16 === 0 }), [s16]);
  return H({ ourProps: { ref: a15, id: u16 }, theirProps: i11, slot: c13, defaultTag: Xe, name: "Dialog.Title" });
}
var Ke = I(We);
var Ve2 = I(Je);
var qe = I(Be2);
var At = w3;
var _t = Object.assign(Ke, { Panel: Ve2, Title: qe, Description: w3 });

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var import_react86 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/start-transition.js
var import_react85 = __toESM(require_react(), 1);
var t13;
var a11 = (t13 = import_react85.default.startTransition) != null ? t13 : function(i11) {
  i11();
};

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var ae2 = ((o17) => (o17[o17.Open = 0] = "Open", o17[o17.Closed = 1] = "Closed", o17))(ae2 || {});
var pe2 = ((t15) => (t15[t15.ToggleDisclosure = 0] = "ToggleDisclosure", t15[t15.CloseDisclosure = 1] = "CloseDisclosure", t15[t15.SetButtonId = 2] = "SetButtonId", t15[t15.SetPanelId = 3] = "SetPanelId", t15[t15.LinkPanel = 4] = "LinkPanel", t15[t15.UnlinkPanel = 5] = "UnlinkPanel", t15))(pe2 || {});
var ce4 = { [0]: (e7) => ({ ...e7, disclosureState: u2(e7.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e7) => e7.disclosureState === 1 ? e7 : { ...e7, disclosureState: 1 }, [4](e7) {
  return e7.linkedPanel === true ? e7 : { ...e7, linkedPanel: true };
}, [5](e7) {
  return e7.linkedPanel === false ? e7 : { ...e7, linkedPanel: false };
}, [2](e7, n14) {
  return e7.buttonId === n14.buttonId ? e7 : { ...e7, buttonId: n14.buttonId };
}, [3](e7, n14) {
  return e7.panelId === n14.panelId ? e7 : { ...e7, panelId: n14.panelId };
} };
var M5 = (0, import_react86.createContext)(null);
M5.displayName = "DisclosureContext";
function F3(e7) {
  let n14 = (0, import_react86.useContext)(M5);
  if (n14 === null) {
    let o17 = new Error(`<${e7} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o17, F3), o17;
  }
  return n14;
}
var k2 = (0, import_react86.createContext)(null);
k2.displayName = "DisclosureAPIContext";
function V(e7) {
  let n14 = (0, import_react86.useContext)(k2);
  if (n14 === null) {
    let o17 = new Error(`<${e7} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o17, V), o17;
  }
  return n14;
}
var H5 = (0, import_react86.createContext)(null);
H5.displayName = "DisclosurePanelContext";
function de() {
  return (0, import_react86.useContext)(H5);
}
function fe(e7, n14) {
  return u2(n14.type, ce4, e7, n14);
}
var Te2 = import_react86.Fragment;
function De2(e7, n14) {
  let { defaultOpen: o17 = false, ...d15 } = e7, u16 = (0, import_react86.useRef)(null), r14 = y(n14, T3((c13) => {
    u16.current = c13;
  }, e7.as === void 0 || e7.as === import_react86.Fragment)), t15 = (0, import_react86.useRef)(null), l15 = (0, import_react86.useRef)(null), i11 = (0, import_react86.useReducer)(fe, { disclosureState: o17 ? 0 : 1, linkedPanel: false, buttonRef: l15, panelRef: t15, buttonId: null, panelId: null }), [{ disclosureState: f21, buttonId: s16 }, T12] = i11, p8 = o4((c13) => {
    T12({ type: 1 });
    let P7 = u(u16);
    if (!P7 || !s16)
      return;
    let y9 = (() => c13 ? c13 instanceof HTMLElement ? c13 : c13.current instanceof HTMLElement ? c13.current : P7.getElementById(s16) : P7.getElementById(s16))();
    y9 == null || y9.focus();
  }), m13 = (0, import_react86.useMemo)(() => ({ close: p8 }), [p8]), D9 = (0, import_react86.useMemo)(() => ({ open: f21 === 0, close: p8 }), [f21, p8]), I5 = { ref: r14 };
  return import_react86.default.createElement(M5.Provider, { value: i11 }, import_react86.default.createElement(k2.Provider, { value: m13 }, import_react86.default.createElement(u7, { value: p8 }, import_react86.default.createElement(s8, { value: u2(f21, { [0]: d9.Open, [1]: d9.Closed }) }, H({ ourProps: I5, theirProps: d15, slot: D9, defaultTag: Te2, name: "Disclosure" })))));
}
var Pe2 = "button";
function ye4(e7, n14) {
  let o17 = (0, import_react45.useId)(), { id: d15 = `headlessui-disclosure-button-${o17}`, disabled: u16 = false, autoFocus: r14 = false, ...t15 } = e7, [l15, i11] = F3("Disclosure.Button"), f21 = de(), s16 = f21 === null ? false : f21 === l15.panelId, T12 = (0, import_react86.useRef)(null), p8 = y(T12, n14, s16 ? null : l15.buttonRef), m13 = U();
  (0, import_react86.useEffect)(() => {
    if (!s16)
      return i11({ type: 2, buttonId: d15 }), () => {
        i11({ type: 2, buttonId: null });
      };
  }, [d15, i11, s16]);
  let D9 = o4((a15) => {
    var E12;
    if (s16) {
      if (l15.disclosureState === 1)
        return;
      switch (a15.key) {
        case o8.Space:
        case o8.Enter:
          a15.preventDefault(), a15.stopPropagation(), i11({ type: 0 }), (E12 = l15.buttonRef.current) == null || E12.focus();
          break;
      }
    } else
      switch (a15.key) {
        case o8.Space:
        case o8.Enter:
          a15.preventDefault(), a15.stopPropagation(), i11({ type: 0 });
          break;
      }
  }), I5 = o4((a15) => {
    switch (a15.key) {
      case o8.Space:
        a15.preventDefault();
        break;
    }
  }), c13 = o4((a15) => {
    var E12;
    r5(a15.currentTarget) || u16 || (s16 ? (i11({ type: 0 }), (E12 = l15.buttonRef.current) == null || E12.focus()) : i11({ type: 0 }));
  }), { isFocusVisible: P7, focusProps: y9 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: r14 }), { isHovered: U6, hoverProps: h7 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: u16 }), { pressed: N5, pressProps: w10 } = w({ disabled: u16 }), q7 = (0, import_react86.useMemo)(() => ({ open: l15.disclosureState === 0, hover: U6, active: N5, disabled: u16, focus: P7, autofocus: r14 }), [l15, U6, N5, P7, u16, r14]), G8 = T8(e7, T12), z7 = s16 ? D({ ref: p8, type: G8, disabled: u16 || void 0, autoFocus: r14, onKeyDown: D9, onClick: c13 }, y9, h7, w10) : D({ ref: p8, id: d15, type: G8, "aria-expanded": l15.disclosureState === 0, "aria-controls": l15.linkedPanel ? l15.panelId : void 0, disabled: u16 || void 0, autoFocus: r14, onKeyDown: D9, onKeyUp: I5, onClick: c13 }, y9, h7, w10);
  return H({ mergeRefs: m13, ourProps: z7, theirProps: t15, slot: q7, defaultTag: Pe2, name: "Disclosure.Button" });
}
var me2 = "div";
var Ee = O.RenderStrategy | O.Static;
function ge(e7, n14) {
  let o17 = (0, import_react45.useId)(), { id: d15 = `headlessui-disclosure-panel-${o17}`, ...u16 } = e7, [r14, t15] = F3("Disclosure.Panel"), { close: l15 } = V("Disclosure.Panel"), i11 = U(), f21 = y(n14, r14.panelRef, (D9) => {
    a11(() => t15({ type: D9 ? 4 : 5 }));
  });
  (0, import_react86.useEffect)(() => (t15({ type: 3, panelId: d15 }), () => {
    t15({ type: 3, panelId: null });
  }), [d15, t15]);
  let s16 = u12(), T12 = (() => s16 !== null ? (s16 & d9.Open) === d9.Open : r14.disclosureState === 0)(), p8 = (0, import_react86.useMemo)(() => ({ open: r14.disclosureState === 0, close: l15 }), [r14, l15]), m13 = { ref: f21, id: d15 };
  return import_react86.default.createElement(H5.Provider, { value: r14.panelId }, H({ mergeRefs: i11, ourProps: m13, theirProps: u16, slot: p8, defaultTag: me2, features: Ee, visible: T12, name: "Disclosure.Panel" }));
}
var Se = I(De2);
var be3 = I(ye4);
var Re3 = I(ge);
var we2 = Object.assign(Se, { Button: be3, Panel: Re3 });

// node_modules/@headlessui/react/dist/components/field/field.js
var import_react87 = __toESM(require_react(), 1);
var A4 = "div";
function L4(d15, l15) {
  let t15 = `headlessui-control-${(0, import_react45.useId)()}`, [s16, p8] = z(), [n14, a15] = U2(), m13 = a3(), { disabled: e7 = m13 || false, ...o17 } = d15, i11 = (0, import_react87.useMemo)(() => ({ disabled: e7 }), [e7]);
  return import_react87.default.createElement(l, { value: e7 }, import_react87.default.createElement(p8, { value: s16 }, import_react87.default.createElement(a15, { value: n14 }, import_react87.default.createElement(f5, { id: t15 }, H({ ourProps: { ref: l15, disabled: e7 || void 0, "aria-disabled": e7 || void 0 }, theirProps: { ...o17, children: import_react87.default.createElement(W, null, typeof o17.children == "function" ? o17.children(i11) : o17.children) }, slot: i11, defaultTag: A4, name: "Field" })))));
}
var H6 = I(L4);

// node_modules/@headlessui/react/dist/components/fieldset/fieldset.js
var import_react88 = __toESM(require_react(), 1);
var f18 = "div";
function E10(r14, l15) {
  let o17 = a3(), { disabled: e7 = o17 || false, ...s16 } = r14, [i11, d15] = z(), p8 = (0, import_react88.useMemo)(() => ({ disabled: e7 }), [e7]);
  return import_react88.default.createElement(l, { value: e7 }, import_react88.default.createElement(d15, null, H({ ourProps: { ref: l15, role: "group", "aria-labelledby": i11, "aria-disabled": e7 || void 0 }, theirProps: s16, slot: p8, defaultTag: f18, name: "Fieldset" })));
}
var L5 = I(E10);

// node_modules/@headlessui/react/dist/components/input/input.js
var import_react89 = __toESM(require_react(), 1);
var x4 = "input";
function h6(n14, s16) {
  let a15 = (0, import_react45.useId)(), l15 = u4(), i11 = a3(), { id: d15 = l15 || `headlessui-input-${a15}`, disabled: e7 = i11 || false, autoFocus: o17 = false, invalid: t15 = false, ...u16 } = n14, f21 = I2(), m13 = G(), { isFocused: r14, focusProps: T12 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: o17 }), { isHovered: p8, hoverProps: b7 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e7 }), y9 = D({ ref: s16, id: d15, "aria-labelledby": f21, "aria-describedby": m13, "aria-invalid": t15 ? "" : void 0, disabled: e7 || void 0, autoFocus: o17 }, T12, b7), I5 = (0, import_react89.useMemo)(() => ({ disabled: e7, invalid: t15, hover: p8, focus: r14, autofocus: o17 }), [e7, t15, p8, r14, o17]);
  return H({ ourProps: y9, theirProps: u16, slot: I5, defaultTag: x4, name: "Input" });
}
var J4 = I(h6);

// node_modules/@headlessui/react/dist/components/legend/legend.js
var import_react90 = __toESM(require_react(), 1);
function o14(t15, n14) {
  return import_react90.default.createElement(K, { as: "div", ref: n14, ...t15 });
}
var d13 = I(o14);

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
var import_react94 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-computed.js
var import_react91 = __toESM(require_react(), 1);
function i10(e7, o17) {
  let [u16, t15] = (0, import_react91.useState)(e7), r14 = s3(e7);
  return n(() => t15(r14.current), [r14, t15, ...o17]), u16;
}

// node_modules/@headlessui/react/dist/hooks/use-did-element-move.js
var import_react92 = __toESM(require_react(), 1);
function p7(e7, r14 = true) {
  let t15 = (0, import_react92.useRef)({ left: 0, top: 0 });
  if (n(() => {
    let u16 = e7.current;
    if (!u16)
      return;
    let l15 = u16.getBoundingClientRect();
    l15 && (t15.current = l15);
  }, [r14]), e7.current == null || !r14 || e7.current === document.activeElement)
    return false;
  let n14 = e7.current.getBoundingClientRect();
  return n14.top !== t15.current.top || n14.left !== t15.current.left;
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
var import_react93 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/get-text-value.js
var a13 = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o16(e7) {
  var r14, i11;
  let n14 = (r14 = e7.innerText) != null ? r14 : "", t15 = e7.cloneNode(true);
  if (!(t15 instanceof HTMLElement))
    return n14;
  let u16 = false;
  for (let f21 of t15.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f21.remove(), u16 = true;
  let l15 = u16 ? (i11 = t15.innerText) != null ? i11 : "" : n14;
  return a13.test(l15) && (l15 = l15.replace(a13, "")), l15;
}
function g6(e7) {
  let n14 = e7.getAttribute("aria-label");
  if (typeof n14 == "string")
    return n14.trim();
  let t15 = e7.getAttribute("aria-labelledby");
  if (t15) {
    let u16 = t15.split(" ").map((l15) => {
      let r14 = document.getElementById(l15);
      if (r14) {
        let i11 = r14.getAttribute("aria-label");
        return typeof i11 == "string" ? i11.trim() : o16(r14).trim();
      }
      return null;
    }).filter(Boolean);
    if (u16.length > 0)
      return u16.join(", ");
  }
  return o16(e7).trim();
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
function s13(c13) {
  let t15 = (0, import_react93.useRef)(""), r14 = (0, import_react93.useRef)("");
  return o4(() => {
    let e7 = c13.current;
    if (!e7)
      return "";
    let u16 = e7.innerText;
    if (t15.current === u16)
      return r14.current;
    let n14 = g6(e7).trim().toLowerCase();
    return t15.current = u16, r14.current = n14, n14;
  });
}

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
var ct = ((o17) => (o17[o17.Open = 0] = "Open", o17[o17.Closed = 1] = "Closed", o17))(ct || {});
var ft = ((o17) => (o17[o17.Single = 0] = "Single", o17[o17.Multi = 1] = "Multi", o17))(ft || {});
var bt = ((o17) => (o17[o17.Pointer = 0] = "Pointer", o17[o17.Other = 1] = "Other", o17))(bt || {});
var Tt = ((i11) => (i11[i11.OpenListbox = 0] = "OpenListbox", i11[i11.CloseListbox = 1] = "CloseListbox", i11[i11.GoToOption = 2] = "GoToOption", i11[i11.Search = 3] = "Search", i11[i11.ClearSearch = 4] = "ClearSearch", i11[i11.RegisterOption = 5] = "RegisterOption", i11[i11.UnregisterOption = 6] = "UnregisterOption", i11))(Tt || {});
function ae3(e7, a15 = (o17) => o17) {
  let o17 = e7.activeOptionIndex !== null ? e7.options[e7.activeOptionIndex] : null, n14 = _2(a15(e7.options.slice()), (x6) => x6.dataRef.current.domRef.current), p8 = o17 ? n14.indexOf(o17) : null;
  return p8 === -1 && (p8 = null), { options: n14, activeOptionIndex: p8 };
}
var xt = { [1](e7) {
  return e7.dataRef.current.disabled || e7.listboxState === 1 ? e7 : { ...e7, activeOptionIndex: null, listboxState: 1, __demoMode: false };
}, [0](e7) {
  if (e7.dataRef.current.disabled || e7.listboxState === 0)
    return e7;
  let a15 = e7.activeOptionIndex, { isSelected: o17 } = e7.dataRef.current, n14 = e7.options.findIndex((p8) => o17(p8.dataRef.current.value));
  return n14 !== -1 && (a15 = n14), { ...e7, listboxState: 0, activeOptionIndex: a15, __demoMode: false };
}, [2](e7, a15) {
  var x6, O3, i11, l15, t15;
  if (e7.dataRef.current.disabled || e7.listboxState === 1)
    return e7;
  let o17 = { ...e7, searchQuery: "", activationTrigger: (x6 = a15.trigger) != null ? x6 : 1, __demoMode: false };
  if (a15.focus === c6.Nothing)
    return { ...o17, activeOptionIndex: null };
  if (a15.focus === c6.Specific)
    return { ...o17, activeOptionIndex: e7.options.findIndex((r14) => r14.id === a15.id) };
  if (a15.focus === c6.Previous) {
    let r14 = e7.activeOptionIndex;
    if (r14 !== null) {
      let A6 = e7.options[r14].dataRef.current.domRef, d15 = f13(a15, { resolveItems: () => e7.options, resolveActiveIndex: () => e7.activeOptionIndex, resolveId: (u16) => u16.id, resolveDisabled: (u16) => u16.dataRef.current.disabled });
      if (d15 !== null) {
        let u16 = e7.options[d15].dataRef.current.domRef;
        if (((O3 = A6.current) == null ? void 0 : O3.previousElementSibling) === u16.current || ((i11 = u16.current) == null ? void 0 : i11.previousElementSibling) === null)
          return { ...o17, activeOptionIndex: d15 };
      }
    }
  } else if (a15.focus === c6.Next) {
    let r14 = e7.activeOptionIndex;
    if (r14 !== null) {
      let A6 = e7.options[r14].dataRef.current.domRef, d15 = f13(a15, { resolveItems: () => e7.options, resolveActiveIndex: () => e7.activeOptionIndex, resolveId: (u16) => u16.id, resolveDisabled: (u16) => u16.dataRef.current.disabled });
      if (d15 !== null) {
        let u16 = e7.options[d15].dataRef.current.domRef;
        if (((l15 = A6.current) == null ? void 0 : l15.nextElementSibling) === u16.current || ((t15 = u16.current) == null ? void 0 : t15.nextElementSibling) === null)
          return { ...o17, activeOptionIndex: d15 };
      }
    }
  }
  let n14 = ae3(e7), p8 = f13(a15, { resolveItems: () => n14.options, resolveActiveIndex: () => n14.activeOptionIndex, resolveId: (r14) => r14.id, resolveDisabled: (r14) => r14.dataRef.current.disabled });
  return { ...o17, ...n14, activeOptionIndex: p8 };
}, [3]: (e7, a15) => {
  if (e7.dataRef.current.disabled || e7.listboxState === 1)
    return e7;
  let n14 = e7.searchQuery !== "" ? 0 : 1, p8 = e7.searchQuery + a15.value.toLowerCase(), O3 = (e7.activeOptionIndex !== null ? e7.options.slice(e7.activeOptionIndex + n14).concat(e7.options.slice(0, e7.activeOptionIndex + n14)) : e7.options).find((l15) => {
    var t15;
    return !l15.dataRef.current.disabled && ((t15 = l15.dataRef.current.textValue) == null ? void 0 : t15.startsWith(p8));
  }), i11 = O3 ? e7.options.indexOf(O3) : -1;
  return i11 === -1 || i11 === e7.activeOptionIndex ? { ...e7, searchQuery: p8 } : { ...e7, searchQuery: p8, activeOptionIndex: i11, activationTrigger: 1 };
}, [4](e7) {
  return e7.dataRef.current.disabled || e7.listboxState === 1 || e7.searchQuery === "" ? e7 : { ...e7, searchQuery: "" };
}, [5]: (e7, a15) => {
  let o17 = { id: a15.id, dataRef: a15.dataRef }, n14 = ae3(e7, (p8) => [...p8, o17]);
  return e7.activeOptionIndex === null && e7.dataRef.current.isSelected(a15.dataRef.current.value) && (n14.activeOptionIndex = n14.options.indexOf(o17)), { ...e7, ...n14 };
}, [6]: (e7, a15) => {
  let o17 = ae3(e7, (n14) => {
    let p8 = n14.findIndex((x6) => x6.id === a15.id);
    return p8 !== -1 && n14.splice(p8, 1), n14;
  });
  return { ...e7, ...o17, activationTrigger: 1 };
} };
var le2 = (0, import_react94.createContext)(null);
le2.displayName = "ListboxActionsContext";
function $2(e7) {
  let a15 = (0, import_react94.useContext)(le2);
  if (a15 === null) {
    let o17 = new Error(`<${e7} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o17, $2), o17;
  }
  return a15;
}
var q2 = (0, import_react94.createContext)(null);
q2.displayName = "ListboxDataContext";
function W4(e7) {
  let a15 = (0, import_react94.useContext)(q2);
  if (a15 === null) {
    let o17 = new Error(`<${e7} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o17, W4), o17;
  }
  return a15;
}
function mt(e7, a15) {
  return u2(a15.type, xt, e7, a15);
}
var Ot = import_react94.Fragment;
function yt(e7, a15) {
  var se4;
  let o17 = a3(), { value: n14, defaultValue: p8, form: x6, name: O3, onChange: i11, by: l15, invalid: t15 = false, disabled: r14 = o17 || false, horizontal: A6 = false, multiple: d15 = false, __demoMode: u16 = false, ...h7 } = e7;
  const N5 = A6 ? "horizontal" : "vertical";
  let B4 = y(a15), [E12 = d15 ? [] : void 0, y9] = T(n14, i11, p8), [D9, g7] = (0, import_react94.useReducer)(mt, { dataRef: (0, import_react94.createRef)(), listboxState: u16 ? 0 : 1, options: [], searchQuery: "", activeOptionIndex: null, activationTrigger: 1, optionsVisible: false, __demoMode: u16 }), C7 = (0, import_react94.useRef)({ static: false, hold: false }), k4 = (0, import_react94.useRef)(null), F6 = (0, import_react94.useRef)(null), b7 = (0, import_react94.useRef)(/* @__PURE__ */ new Map()), R8 = u8(l15), w10 = (0, import_react94.useCallback)((T12) => u2(c13.mode, { [1]: () => E12.some((L9) => R8(L9, T12)), [0]: () => R8(E12, T12) }), [E12]), c13 = (0, import_react94.useMemo)(() => ({ ...D9, value: E12, disabled: r14, invalid: t15, mode: d15 ? 1 : 0, orientation: N5, compare: R8, isSelected: w10, optionsPropsRef: C7, buttonRef: k4, optionsRef: F6, listRef: b7 }), [E12, r14, t15, d15, D9, b7]);
  n(() => {
    D9.dataRef.current = c13;
  }, [c13]), w6([c13.buttonRef, c13.optionsRef], (T12, L9) => {
    var I5;
    g7({ type: 1 }), A2(L9, h4.Loose) || (T12.preventDefault(), (I5 = c13.buttonRef.current) == null || I5.focus());
  }, c13.listboxState === 0);
  let v7 = (0, import_react94.useMemo)(() => ({ open: c13.listboxState === 0, disabled: r14, invalid: t15, value: E12 }), [c13, r14, E12, t15]), G8 = o4((T12) => {
    let L9 = c13.options.find((I5) => I5.id === T12);
    L9 && Z7(L9.dataRef.current.value);
  }), Y5 = o4(() => {
    if (c13.activeOptionIndex !== null) {
      let { dataRef: T12, id: L9 } = c13.options[c13.activeOptionIndex];
      Z7(T12.current.value), g7({ type: 2, focus: c6.Specific, id: L9 });
    }
  }), Q5 = o4(() => g7({ type: 0 })), s16 = o4(() => g7({ type: 1 })), P7 = p(), M7 = o4((T12, L9, I5) => {
    P7.dispose(), P7.microTask(() => T12 === c6.Specific ? g7({ type: 2, focus: c6.Specific, id: L9, trigger: I5 }) : g7({ type: 2, focus: T12, trigger: I5 }));
  }), Te3 = o4((T12, L9) => (g7({ type: 5, id: T12, dataRef: L9 }), () => g7({ type: 6, id: T12 }))), Z7 = o4((T12) => u2(c13.mode, { [0]() {
    return y9 == null ? void 0 : y9(T12);
  }, [1]() {
    let L9 = c13.value.slice(), I5 = L9.findIndex((Se5) => R8(Se5, T12));
    return I5 === -1 ? L9.push(T12) : L9.splice(I5, 1), y9 == null ? void 0 : y9(L9);
  } })), xe4 = o4((T12) => g7({ type: 3, value: T12 })), me6 = o4(() => g7({ type: 4 })), Oe2 = (0, import_react94.useMemo)(() => ({ onChange: Z7, registerOption: Te3, goToOption: M7, closeListbox: s16, openListbox: Q5, selectActiveOption: Y5, selectOption: G8, search: xe4, clearSearch: me6 }), []), [ye7, ve6] = z({ inherit: true }), ge3 = { ref: B4 }, Le5 = (0, import_react94.useCallback)(() => y9 == null ? void 0 : y9(p8), [y9]);
  return import_react94.default.createElement(ve6, { value: ye7, props: { htmlFor: (se4 = c13.buttonRef.current) == null ? void 0 : se4.id }, slot: { open: c13.listboxState === 0, disabled: r14 } }, import_react94.default.createElement(ve2, null, import_react94.default.createElement(le2.Provider, { value: Oe2 }, import_react94.default.createElement(q2.Provider, { value: c13 }, import_react94.default.createElement(s8, { value: u2(c13.listboxState, { [0]: d9.Open, [1]: d9.Closed }) }, O3 != null && E12 != null && import_react94.default.createElement(j2, { disabled: r14, data: { [O3]: E12 }, form: x6, onReset: Le5 }), H({ ourProps: ge3, theirProps: h7, slot: v7, defaultTag: Ot, name: "Listbox" }))))));
}
var vt = "button";
function gt(e7, a15) {
  var c13;
  let o17 = W4("Listbox.Button"), n14 = $2("Listbox.Button"), p8 = (0, import_react45.useId)(), x6 = u4(), { id: O3 = x6 || `headlessui-listbox-button-${p8}`, disabled: i11 = o17.disabled || false, autoFocus: l15 = false, ...t15 } = e7, r14 = y(o17.buttonRef, a15, ye()), A6 = Fe(), d15 = p(), u16 = o4((v7) => {
    switch (v7.key) {
      case o8.Enter:
        p2(v7.currentTarget);
        break;
      case o8.Space:
      case o8.ArrowDown:
        v7.preventDefault(), n14.openListbox(), d15.nextFrame(() => {
          o17.value || n14.goToOption(c6.First);
        });
        break;
      case o8.ArrowUp:
        v7.preventDefault(), n14.openListbox(), d15.nextFrame(() => {
          o17.value || n14.goToOption(c6.Last);
        });
        break;
    }
  }), h7 = o4((v7) => {
    switch (v7.key) {
      case o8.Space:
        v7.preventDefault();
        break;
    }
  }), N5 = o4((v7) => {
    if (r5(v7.currentTarget))
      return v7.preventDefault();
    o17.listboxState === 0 ? (n14.closeListbox(), d15.nextFrame(() => {
      var G8;
      return (G8 = o17.buttonRef.current) == null ? void 0 : G8.focus({ preventScroll: true });
    })) : (v7.preventDefault(), n14.openListbox());
  }), B4 = o4((v7) => v7.preventDefault()), E12 = I2([O3]), y9 = G(), { isFocusVisible: D9, focusProps: g7 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: l15 }), { isHovered: C7, hoverProps: k4 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: i11 }), { pressed: F6, pressProps: b7 } = w({ disabled: i11 }), R8 = (0, import_react94.useMemo)(() => ({ open: o17.listboxState === 0, active: F6 || o17.listboxState === 0, disabled: i11, invalid: o17.invalid, value: o17.value, hover: C7, focus: D9, autofocus: l15 }), [o17.listboxState, o17.value, i11, C7, D9, F6, o17.invalid, l15]), w10 = D(A6(), { ref: r14, id: O3, type: T8(e7, o17.buttonRef), "aria-haspopup": "listbox", "aria-controls": (c13 = o17.optionsRef.current) == null ? void 0 : c13.id, "aria-expanded": o17.listboxState === 0, "aria-labelledby": E12, "aria-describedby": y9, disabled: i11 || void 0, autoFocus: l15, onKeyDown: u16, onKeyUp: h7, onKeyPress: B4, onClick: N5 }, g7, k4, b7);
  return H({ ourProps: w10, theirProps: t15, slot: R8, defaultTag: vt, name: "Listbox.Button" });
}
var be4 = (0, import_react94.createContext)(false);
var Lt = "div";
var St = O.RenderStrategy | O.Static;
function Rt(e7, a15) {
  var Q5;
  let o17 = (0, import_react45.useId)(), { id: n14 = `headlessui-listbox-options-${o17}`, anchor: p8, portal: x6 = false, modal: O3 = true, ...i11 } = e7, l15 = xe(p8);
  l15 && (x6 = true);
  let t15 = W4("Listbox.Options"), r14 = $2("Listbox.Options"), A6 = n9(t15.optionsRef), d15 = u12(), u16 = (() => d15 !== null ? (d15 & d9.Open) === d9.Open : t15.listboxState === 0)();
  m6(t15.buttonRef, r14.closeListbox, u16), u10(A6, t15.__demoMode ? false : O3 && t15.listboxState === 0), T6({ allowed: o4(() => [t15.buttonRef.current, t15.optionsRef.current]) }, t15.__demoMode ? false : O3 && t15.listboxState === 0);
  let h7 = (0, import_react94.useRef)(null);
  (0, import_react94.useEffect)(() => {
    var P7;
    if (!((P7 = l15 == null ? void 0 : l15.to) != null && P7.includes("selection")))
      return;
    if (!u16) {
      h7.current = null;
      return;
    }
    let s16 = Array.from(t15.listRef.current.values());
    h7.current = s16.findIndex((M7) => (M7 == null ? void 0 : M7.dataset.selected) === ""), h7.current === -1 && (h7.current = s16.findIndex((M7) => (M7 == null ? void 0 : M7.dataset.disabled) === void 0), r14.goToOption(c6.First));
  }, [u16, t15.listRef]);
  let B4 = p7(t15.buttonRef, t15.listboxState !== 0) ? false : u16, E12 = (() => {
    if (l15 == null)
      return;
    if (t15.listRef.current.size <= 0)
      return { ...l15, inner: void 0 };
    let s16 = Array.from(t15.listRef.current.values());
    return { ...l15, inner: { listRef: { current: s16 }, index: h7.current } };
  })(), [y9, D9] = Re(E12), g7 = be(), C7 = y(t15.optionsRef, a15, l15 ? y9 : null), k4 = p(), F6 = p();
  (0, import_react94.useEffect)(() => {
    var P7;
    let s16 = t15.optionsRef.current;
    s16 && t15.listboxState === 0 && s16 !== ((P7 = u(s16)) == null ? void 0 : P7.activeElement) && (s16 == null || s16.focus({ preventScroll: true }));
  }, [t15.listboxState, t15.optionsRef, t15.optionsRef.current]);
  let b7 = o4((s16) => {
    switch (F6.dispose(), s16.key) {
      case o8.Space:
        if (t15.searchQuery !== "")
          return s16.preventDefault(), s16.stopPropagation(), r14.search(s16.key);
      case o8.Enter:
        if (s16.preventDefault(), s16.stopPropagation(), t15.activeOptionIndex !== null) {
          let { dataRef: P7 } = t15.options[t15.activeOptionIndex];
          r14.onChange(P7.current.value);
        }
        t15.mode === 0 && (r14.closeListbox(), o2().nextFrame(() => {
          var P7;
          return (P7 = t15.buttonRef.current) == null ? void 0 : P7.focus({ preventScroll: true });
        }));
        break;
      case u2(t15.orientation, { vertical: o8.ArrowDown, horizontal: o8.ArrowRight }):
        return s16.preventDefault(), s16.stopPropagation(), r14.goToOption(c6.Next);
      case u2(t15.orientation, { vertical: o8.ArrowUp, horizontal: o8.ArrowLeft }):
        return s16.preventDefault(), s16.stopPropagation(), r14.goToOption(c6.Previous);
      case o8.Home:
      case o8.PageUp:
        return s16.preventDefault(), s16.stopPropagation(), r14.goToOption(c6.First);
      case o8.End:
      case o8.PageDown:
        return s16.preventDefault(), s16.stopPropagation(), r14.goToOption(c6.Last);
      case o8.Escape:
        return s16.preventDefault(), s16.stopPropagation(), r14.closeListbox(), k4.nextFrame(() => {
          var P7;
          return (P7 = t15.buttonRef.current) == null ? void 0 : P7.focus({ preventScroll: true });
        });
      case o8.Tab:
        s16.preventDefault(), s16.stopPropagation();
        break;
      default:
        s16.key.length === 1 && (r14.search(s16.key), F6.setTimeout(() => r14.clearSearch(), 350));
        break;
    }
  }), R8 = i10(() => {
    var s16;
    return (s16 = t15.buttonRef.current) == null ? void 0 : s16.id;
  }, [t15.buttonRef.current]), w10 = (0, import_react94.useMemo)(() => ({ open: t15.listboxState === 0 }), [t15]), c13 = D(l15 ? g7() : {}, { id: n14, ref: C7, "aria-activedescendant": t15.activeOptionIndex === null || (Q5 = t15.options[t15.activeOptionIndex]) == null ? void 0 : Q5.id, "aria-multiselectable": t15.mode === 1 ? true : void 0, "aria-labelledby": R8, "aria-orientation": t15.orientation, onKeyDown: b7, role: "listbox", tabIndex: 0, style: { ...D9, "--button-width": f7(t15.buttonRef, true).width } }), [v7, G8] = (0, import_react94.useState)(t15.value);
  t15.value !== v7 && t15.listboxState === 0 && t15.mode !== 1 && G8(t15.value);
  let Y5 = o4((s16) => t15.compare(v7, s16));
  return import_react94.default.createElement(te, { enabled: x6 ? e7.static || u16 : false }, import_react94.default.createElement(q2.Provider, { value: t15.mode === 1 ? t15 : { ...t15, isSelected: Y5 } }, H({ ourProps: c13, theirProps: i11, slot: w10, defaultTag: Lt, features: St, visible: B4, name: "Listbox.Options" })));
}
var Pt = "div";
function At2(e7, a15) {
  let o17 = (0, import_react45.useId)(), { id: n14 = `headlessui-listbox-option-${o17}`, disabled: p8 = false, value: x6, ...O3 } = e7, i11 = (0, import_react94.useContext)(be4) === true, l15 = W4("Listbox.Option"), t15 = $2("Listbox.Option"), r14 = l15.activeOptionIndex !== null ? l15.options[l15.activeOptionIndex].id === n14 : false, A6 = l15.isSelected(x6), d15 = (0, import_react94.useRef)(null), u16 = s13(d15), h7 = s3({ disabled: p8, value: x6, domRef: d15, get textValue() {
    return u16();
  } }), N5 = y(a15, d15, (b7) => {
    b7 ? l15.listRef.current.set(n14, b7) : l15.listRef.current.delete(n14);
  });
  n(() => {
    if (l15.__demoMode || l15.listboxState !== 0 || !r14 || l15.activationTrigger === 0)
      return;
    let b7 = o2();
    return b7.requestAnimationFrame(() => {
      var R8, w10;
      (w10 = (R8 = d15.current) == null ? void 0 : R8.scrollIntoView) == null || w10.call(R8, { block: "nearest" });
    }), b7.dispose;
  }, [d15, r14, l15.__demoMode, l15.listboxState, l15.activationTrigger, l15.activeOptionIndex]), n(() => {
    if (!i11)
      return t15.registerOption(n14, h7);
  }, [h7, n14, i11]);
  let B4 = o4((b7) => {
    if (p8)
      return b7.preventDefault();
    t15.onChange(x6), l15.mode === 0 && (t15.closeListbox(), o2().nextFrame(() => {
      var R8;
      return (R8 = l15.buttonRef.current) == null ? void 0 : R8.focus({ preventScroll: true });
    }));
  }), E12 = o4(() => {
    if (p8)
      return t15.goToOption(c6.Nothing);
    t15.goToOption(c6.Specific, n14);
  }), y9 = u11(), D9 = o4((b7) => {
    y9.update(b7), !p8 && (r14 || t15.goToOption(c6.Specific, n14, 0));
  }), g7 = o4((b7) => {
    y9.wasMoved(b7) && (p8 || r14 || t15.goToOption(c6.Specific, n14, 0));
  }), C7 = o4((b7) => {
    y9.wasMoved(b7) && (p8 || r14 && t15.goToOption(c6.Nothing));
  }), k4 = (0, import_react94.useMemo)(() => ({ active: r14, focus: r14, selected: A6, disabled: p8, selectedOption: A6 && i11 }), [r14, A6, p8, i11]), F6 = i11 ? {} : { id: n14, ref: N5, role: "option", tabIndex: p8 === true ? void 0 : -1, "aria-disabled": p8 === true ? true : void 0, "aria-selected": A6, disabled: void 0, onClick: B4, onFocus: E12, onPointerEnter: D9, onMouseEnter: D9, onPointerMove: g7, onMouseMove: g7, onPointerLeave: C7, onMouseLeave: C7 };
  return !A6 && i11 ? null : H({ ourProps: F6, theirProps: O3, slot: k4, defaultTag: Pt, name: "Listbox.Option" });
}
var Et2 = import_react94.Fragment;
function ht(e7, a15) {
  let { options: o17, placeholder: n14, ...p8 } = e7, O3 = { ref: y(a15) }, i11 = W4("ListboxSelectedOption"), l15 = (0, import_react94.useMemo)(() => ({}), []), t15 = i11.value === void 0 || i11.value === null || i11.mode === 1 && Array.isArray(i11.value) && i11.value.length === 0;
  return import_react94.default.createElement(be4.Provider, { value: true }, H({ ourProps: O3, theirProps: { ...p8, children: import_react94.default.createElement(import_react94.default.Fragment, null, n14 && t15 ? n14 : o17) }, slot: l15, defaultTag: Et2, name: "ListboxSelectedOption" }));
}
var Dt = I(yt);
var _t2 = I(gt);
var It = K;
var Ct = I(Rt);
var Ft = I(At2);
var Mt = I(ht);
var Lo2 = Object.assign(Dt, { Button: _t2, Label: It, Options: Ct, Option: Ft, SelectedOption: Mt });

// node_modules/@headlessui/react/dist/components/menu/menu.js
var import_react95 = __toESM(require_react(), 1);
var He2 = ((r14) => (r14[r14.Open = 0] = "Open", r14[r14.Closed = 1] = "Closed", r14))(He2 || {});
var Ne2 = ((r14) => (r14[r14.Pointer = 0] = "Pointer", r14[r14.Other = 1] = "Other", r14))(Ne2 || {});
var Be3 = ((n14) => (n14[n14.OpenMenu = 0] = "OpenMenu", n14[n14.CloseMenu = 1] = "CloseMenu", n14[n14.GoToItem = 2] = "GoToItem", n14[n14.Search = 3] = "Search", n14[n14.ClearSearch = 4] = "ClearSearch", n14[n14.RegisterItem = 5] = "RegisterItem", n14[n14.UnregisterItem = 6] = "UnregisterItem", n14))(Be3 || {});
function j10(e7, a15 = (r14) => r14) {
  let r14 = e7.activeItemIndex !== null ? e7.items[e7.activeItemIndex] : null, s16 = _2(a15(e7.items.slice()), (p8) => p8.dataRef.current.domRef.current), o17 = r14 ? s16.indexOf(r14) : null;
  return o17 === -1 && (o17 = null), { items: s16, activeItemIndex: o17 };
}
var ke2 = { [1](e7) {
  return e7.menuState === 1 ? e7 : { ...e7, activeItemIndex: null, menuState: 1 };
}, [0](e7) {
  return e7.menuState === 0 ? e7 : { ...e7, __demoMode: false, menuState: 0 };
}, [2]: (e7, a15) => {
  var p8, d15, n14, u16, t15;
  if (e7.menuState === 1)
    return e7;
  let r14 = { ...e7, searchQuery: "", activationTrigger: (p8 = a15.trigger) != null ? p8 : 1, __demoMode: false };
  if (a15.focus === c6.Nothing)
    return { ...r14, activeItemIndex: null };
  if (a15.focus === c6.Specific)
    return { ...r14, activeItemIndex: e7.items.findIndex((l15) => l15.id === a15.id) };
  if (a15.focus === c6.Previous) {
    let l15 = e7.activeItemIndex;
    if (l15 !== null) {
      let g7 = e7.items[l15].dataRef.current.domRef, c13 = f13(a15, { resolveItems: () => e7.items, resolveActiveIndex: () => e7.activeItemIndex, resolveId: (m13) => m13.id, resolveDisabled: (m13) => m13.dataRef.current.disabled });
      if (c13 !== null) {
        let m13 = e7.items[c13].dataRef.current.domRef;
        if (((d15 = g7.current) == null ? void 0 : d15.previousElementSibling) === m13.current || ((n14 = m13.current) == null ? void 0 : n14.previousElementSibling) === null)
          return { ...r14, activeItemIndex: c13 };
      }
    }
  } else if (a15.focus === c6.Next) {
    let l15 = e7.activeItemIndex;
    if (l15 !== null) {
      let g7 = e7.items[l15].dataRef.current.domRef, c13 = f13(a15, { resolveItems: () => e7.items, resolveActiveIndex: () => e7.activeItemIndex, resolveId: (m13) => m13.id, resolveDisabled: (m13) => m13.dataRef.current.disabled });
      if (c13 !== null) {
        let m13 = e7.items[c13].dataRef.current.domRef;
        if (((u16 = g7.current) == null ? void 0 : u16.nextElementSibling) === m13.current || ((t15 = m13.current) == null ? void 0 : t15.nextElementSibling) === null)
          return { ...r14, activeItemIndex: c13 };
      }
    }
  }
  let s16 = j10(e7), o17 = f13(a15, { resolveItems: () => s16.items, resolveActiveIndex: () => s16.activeItemIndex, resolveId: (l15) => l15.id, resolveDisabled: (l15) => l15.dataRef.current.disabled });
  return { ...r14, ...s16, activeItemIndex: o17 };
}, [3]: (e7, a15) => {
  let s16 = e7.searchQuery !== "" ? 0 : 1, o17 = e7.searchQuery + a15.value.toLowerCase(), d15 = (e7.activeItemIndex !== null ? e7.items.slice(e7.activeItemIndex + s16).concat(e7.items.slice(0, e7.activeItemIndex + s16)) : e7.items).find((u16) => {
    var t15;
    return ((t15 = u16.dataRef.current.textValue) == null ? void 0 : t15.startsWith(o17)) && !u16.dataRef.current.disabled;
  }), n14 = d15 ? e7.items.indexOf(d15) : -1;
  return n14 === -1 || n14 === e7.activeItemIndex ? { ...e7, searchQuery: o17 } : { ...e7, searchQuery: o17, activeItemIndex: n14, activationTrigger: 1 };
}, [4](e7) {
  return e7.searchQuery === "" ? e7 : { ...e7, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e7, a15) => {
  let r14 = j10(e7, (s16) => [...s16, { id: a15.id, dataRef: a15.dataRef }]);
  return { ...e7, ...r14 };
}, [6]: (e7, a15) => {
  let r14 = j10(e7, (s16) => {
    let o17 = s16.findIndex((p8) => p8.id === a15.id);
    return o17 !== -1 && s16.splice(o17, 1), s16;
  });
  return { ...e7, ...r14, activationTrigger: 1 };
} };
var Q2 = (0, import_react95.createContext)(null);
Q2.displayName = "MenuContext";
function w8(e7) {
  let a15 = (0, import_react95.useContext)(Q2);
  if (a15 === null) {
    let r14 = new Error(`<${e7} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r14, w8), r14;
  }
  return a15;
}
function we3(e7, a15) {
  return u2(a15.type, ke2, e7, a15);
}
var Ke2 = import_react95.Fragment;
function We2(e7, a15) {
  let { __demoMode: r14 = false, ...s16 } = e7, o17 = (0, import_react95.useReducer)(we3, { __demoMode: r14, menuState: r14 ? 0 : 1, buttonRef: (0, import_react95.createRef)(), itemsRef: (0, import_react95.createRef)(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: p8, itemsRef: d15, buttonRef: n14 }, u16] = o17, t15 = y(a15);
  w6([n14, d15], (m13, E12) => {
    var I5;
    u16({ type: 1 }), A2(E12, h4.Loose) || (m13.preventDefault(), (I5 = n14.current) == null || I5.focus());
  }, p8 === 0);
  let l15 = o4(() => {
    u16({ type: 1 });
  }), g7 = (0, import_react95.useMemo)(() => ({ open: p8 === 0, close: l15 }), [p8, l15]), c13 = { ref: t15 };
  return import_react95.default.createElement(ve2, null, import_react95.default.createElement(Q2.Provider, { value: o17 }, import_react95.default.createElement(s8, { value: u2(p8, { [0]: d9.Open, [1]: d9.Closed }) }, H({ ourProps: c13, theirProps: s16, slot: g7, defaultTag: Ke2, name: "Menu" }))));
}
var je2 = "button";
function Qe(e7, a15) {
  var D9;
  let r14 = (0, import_react45.useId)(), { id: s16 = `headlessui-menu-button-${r14}`, disabled: o17 = false, autoFocus: p8 = false, ...d15 } = e7, [n14, u16] = w8("Menu.Button"), t15 = Fe(), l15 = y(n14.buttonRef, a15, ye()), g7 = p(), c13 = o4((f21) => {
    switch (f21.key) {
      case o8.Space:
      case o8.Enter:
      case o8.ArrowDown:
        f21.preventDefault(), f21.stopPropagation(), u16({ type: 0 }), g7.nextFrame(() => u16({ type: 2, focus: c6.First }));
        break;
      case o8.ArrowUp:
        f21.preventDefault(), f21.stopPropagation(), u16({ type: 0 }), g7.nextFrame(() => u16({ type: 2, focus: c6.Last }));
        break;
    }
  }), m13 = o4((f21) => {
    switch (f21.key) {
      case o8.Space:
        f21.preventDefault();
        break;
    }
  }), E12 = o4((f21) => {
    if (r5(f21.currentTarget))
      return f21.preventDefault();
    o17 || (n14.menuState === 0 ? (u16({ type: 1 }), g7.nextFrame(() => {
      var h7;
      return (h7 = n14.buttonRef.current) == null ? void 0 : h7.focus({ preventScroll: true });
    })) : (f21.preventDefault(), u16({ type: 0 })));
  }), { isFocusVisible: I5, focusProps: P7 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: p8 }), { isHovered: S7, hoverProps: b7 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: o17 }), { pressed: _7, pressProps: F6 } = w({ disabled: o17 }), C7 = (0, import_react95.useMemo)(() => ({ open: n14.menuState === 0, active: _7 || n14.menuState === 0, disabled: o17, hover: S7, focus: I5, autofocus: p8 }), [n14, S7, I5, _7, o17, p8]), O3 = D(t15(), { ref: l15, id: s16, type: T8(e7, n14.buttonRef), "aria-haspopup": "menu", "aria-controls": (D9 = n14.itemsRef.current) == null ? void 0 : D9.id, "aria-expanded": n14.menuState === 0, disabled: o17 || void 0, autoFocus: p8, onKeyDown: c13, onKeyUp: m13, onClick: E12 }, P7, b7, F6);
  return H({ ourProps: O3, theirProps: d15, slot: C7, defaultTag: je2, name: "Menu.Button" });
}
var Je2 = "div";
var Ve3 = O.RenderStrategy | O.Static;
function Xe2(e7, a15) {
  var h7, M7;
  let r14 = (0, import_react45.useId)(), { id: s16 = `headlessui-menu-items-${r14}`, anchor: o17, portal: p8 = false, modal: d15 = true, ...n14 } = e7, u16 = xe(o17), [t15, l15] = w8("Menu.Items"), [g7, c13] = Re(u16), m13 = be(), E12 = y(t15.itemsRef, a15, u16 ? g7 : null), I5 = n9(t15.itemsRef);
  u16 && (p8 = true);
  let P7 = p(), S7 = u12(), b7 = (() => S7 !== null ? (S7 & d9.Open) === d9.Open : t15.menuState === 0)();
  m6(t15.buttonRef, () => l15({ type: 1 }), b7), u10(I5, t15.__demoMode ? false : d15 && t15.menuState === 0), T6({ allowed: o4(() => [t15.buttonRef.current, t15.itemsRef.current]) }, t15.__demoMode ? false : d15 && t15.menuState === 0);
  let F6 = p7(t15.buttonRef, t15.menuState !== 0) ? false : b7;
  (0, import_react95.useEffect)(() => {
    let i11 = t15.itemsRef.current;
    i11 && t15.menuState === 0 && i11 !== (I5 == null ? void 0 : I5.activeElement) && i11.focus({ preventScroll: true });
  }, [t15.menuState, t15.itemsRef, I5, t15.itemsRef.current]), F2({ container: t15.itemsRef.current, enabled: t15.menuState === 0, accept(i11) {
    return i11.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : i11.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(i11) {
    i11.setAttribute("role", "none");
  } });
  let C7 = o4((i11) => {
    var L9, J6;
    switch (P7.dispose(), i11.key) {
      case o8.Space:
        if (t15.searchQuery !== "")
          return i11.preventDefault(), i11.stopPropagation(), l15({ type: 3, value: i11.key });
      case o8.Enter:
        if (i11.preventDefault(), i11.stopPropagation(), l15({ type: 1 }), t15.activeItemIndex !== null) {
          let { dataRef: G8 } = t15.items[t15.activeItemIndex];
          (J6 = (L9 = G8.current) == null ? void 0 : L9.domRef.current) == null || J6.click();
        }
        G3(t15.buttonRef.current);
        break;
      case o8.ArrowDown:
        return i11.preventDefault(), i11.stopPropagation(), l15({ type: 2, focus: c6.Next });
      case o8.ArrowUp:
        return i11.preventDefault(), i11.stopPropagation(), l15({ type: 2, focus: c6.Previous });
      case o8.Home:
      case o8.PageUp:
        return i11.preventDefault(), i11.stopPropagation(), l15({ type: 2, focus: c6.First });
      case o8.End:
      case o8.PageDown:
        return i11.preventDefault(), i11.stopPropagation(), l15({ type: 2, focus: c6.Last });
      case o8.Escape:
        i11.preventDefault(), i11.stopPropagation(), l15({ type: 1 }), o2().nextFrame(() => {
          var G8;
          return (G8 = t15.buttonRef.current) == null ? void 0 : G8.focus({ preventScroll: true });
        });
        break;
      case o8.Tab:
        i11.preventDefault(), i11.stopPropagation(), l15({ type: 1 }), o2().microTask(() => {
          j3(t15.buttonRef.current, i11.shiftKey ? F.Previous : F.Next);
        });
        break;
      default:
        i11.key.length === 1 && (l15({ type: 3, value: i11.key }), P7.setTimeout(() => l15({ type: 4 }), 350));
        break;
    }
  }), O3 = o4((i11) => {
    switch (i11.key) {
      case o8.Space:
        i11.preventDefault();
        break;
    }
  }), D9 = (0, import_react95.useMemo)(() => ({ open: t15.menuState === 0 }), [t15]), f21 = D(u16 ? m13() : {}, { "aria-activedescendant": t15.activeItemIndex === null || (h7 = t15.items[t15.activeItemIndex]) == null ? void 0 : h7.id, "aria-labelledby": (M7 = t15.buttonRef.current) == null ? void 0 : M7.id, id: s16, onKeyDown: C7, onKeyUp: O3, role: "menu", tabIndex: 0, ref: E12, style: { ...c13, "--button-width": f7(t15.buttonRef, true).width } });
  return import_react95.default.createElement(te, { enabled: p8 ? e7.static || b7 : false }, H({ ourProps: f21, theirProps: n14, slot: D9, defaultTag: Je2, features: Ve3, visible: F6, name: "Menu.Items" }));
}
var $e2 = import_react95.Fragment;
function qe2(e7, a15) {
  let r14 = (0, import_react45.useId)(), { id: s16 = `headlessui-menu-item-${r14}`, disabled: o17 = false, ...p8 } = e7, [d15, n14] = w8("Menu.Item"), u16 = d15.activeItemIndex !== null ? d15.items[d15.activeItemIndex].id === s16 : false, t15 = (0, import_react95.useRef)(null), l15 = y(a15, t15);
  n(() => {
    if (d15.__demoMode || d15.menuState !== 0 || !u16 || d15.activationTrigger === 0)
      return;
    let M7 = o2();
    return M7.requestAnimationFrame(() => {
      var i11, L9;
      (L9 = (i11 = t15.current) == null ? void 0 : i11.scrollIntoView) == null || L9.call(i11, { block: "nearest" });
    }), M7.dispose;
  }, [d15.__demoMode, t15, u16, d15.menuState, d15.activationTrigger, d15.activeItemIndex]);
  let g7 = s13(t15), c13 = (0, import_react95.useRef)({ disabled: o17, domRef: t15, get textValue() {
    return g7();
  } });
  n(() => {
    c13.current.disabled = o17;
  }, [c13, o17]), n(() => (n14({ type: 5, id: s16, dataRef: c13 }), () => n14({ type: 6, id: s16 })), [c13, s16]);
  let m13 = o4(() => {
    n14({ type: 1 });
  }), E12 = o4((M7) => {
    if (o17)
      return M7.preventDefault();
    n14({ type: 1 }), G3(d15.buttonRef.current);
  }), I5 = o4(() => {
    if (o17)
      return n14({ type: 2, focus: c6.Nothing });
    n14({ type: 2, focus: c6.Specific, id: s16 });
  }), P7 = u11(), S7 = o4((M7) => {
    P7.update(M7), !o17 && (u16 || n14({ type: 2, focus: c6.Specific, id: s16, trigger: 0 }));
  }), b7 = o4((M7) => {
    P7.wasMoved(M7) && (o17 || u16 || n14({ type: 2, focus: c6.Specific, id: s16, trigger: 0 }));
  }), _7 = o4((M7) => {
    P7.wasMoved(M7) && (o17 || u16 && n14({ type: 2, focus: c6.Nothing }));
  }), [F6, C7] = z(), [O3, D9] = U2(), f21 = (0, import_react95.useMemo)(() => ({ active: u16, focus: u16, disabled: o17, close: m13 }), [u16, o17, m13]);
  return import_react95.default.createElement(C7, null, import_react95.default.createElement(D9, null, H({ ourProps: { id: s16, ref: l15, role: "menuitem", tabIndex: o17 === true ? void 0 : -1, "aria-disabled": o17 === true ? true : void 0, "aria-labelledby": F6, "aria-describedby": O3, disabled: void 0, onClick: E12, onFocus: I5, onPointerEnter: S7, onMouseEnter: S7, onPointerMove: b7, onMouseMove: b7, onPointerLeave: _7, onMouseLeave: _7 }, theirProps: p8, slot: f21, defaultTag: $e2, name: "Menu.Item" })));
}
var ze = "div";
function Ye2(e7, a15) {
  let [r14, s16] = z();
  return import_react95.default.createElement(s16, null, H({ ourProps: { ref: a15, "aria-labelledby": r14, role: "group" }, theirProps: e7, slot: {}, defaultTag: ze, name: "Menu.Section" }));
}
var Ze = "header";
function et(e7, a15) {
  let r14 = (0, import_react45.useId)(), { id: s16 = `headlessui-menu-heading-${r14}`, ...o17 } = e7, p8 = P4();
  n(() => p8.register(s16), [s16, p8.register]);
  let d15 = { id: s16, ref: a15, role: "presentation", ...p8.props };
  return H({ ourProps: d15, theirProps: o17, slot: {}, defaultTag: Ze, name: "Menu.Heading" });
}
var tt = "div";
function nt(e7, a15) {
  return H({ ourProps: { ref: a15, role: "separator" }, theirProps: e7, slot: {}, defaultTag: tt, name: "Menu.Separator" });
}
var rt = I(We2);
var ot = I(Qe);
var at = I(Xe2);
var it = I(qe2);
var st = I(Ye2);
var lt = I(et);
var ut = I(nt);
var Kt = Object.assign(rt, { Button: ot, Items: at, Item: it, Section: st, Heading: lt, Separator: ut });

// node_modules/@headlessui/react/dist/components/popover/popover.js
var import_react96 = __toESM(require_react(), 1);
var ze2 = ((u16) => (u16[u16.Open = 0] = "Open", u16[u16.Closed = 1] = "Closed", u16))(ze2 || {});
var Qe2 = ((i11) => (i11[i11.TogglePopover = 0] = "TogglePopover", i11[i11.ClosePopover = 1] = "ClosePopover", i11[i11.SetButton = 2] = "SetButton", i11[i11.SetButtonId = 3] = "SetButtonId", i11[i11.SetPanel = 4] = "SetPanel", i11[i11.SetPanelId = 5] = "SetPanelId", i11))(Qe2 || {});
var Ze2 = { [0]: (t15) => ({ ...t15, popoverState: u2(t15.popoverState, { [0]: 1, [1]: 0 }), __demoMode: false }), [1](t15) {
  return t15.popoverState === 1 ? t15 : { ...t15, popoverState: 1, __demoMode: false };
}, [2](t15, a15) {
  return t15.button === a15.button ? t15 : { ...t15, button: a15.button };
}, [3](t15, a15) {
  return t15.buttonId === a15.buttonId ? t15 : { ...t15, buttonId: a15.buttonId };
}, [4](t15, a15) {
  return t15.panel === a15.panel ? t15 : { ...t15, panel: a15.panel };
}, [5](t15, a15) {
  return t15.panelId === a15.panelId ? t15 : { ...t15, panelId: a15.panelId };
} };
var de3 = (0, import_react96.createContext)(null);
de3.displayName = "PopoverContext";
function ne(t15) {
  let a15 = (0, import_react96.useContext)(de3);
  if (a15 === null) {
    let u16 = new Error(`<${t15} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u16, ne), u16;
  }
  return a15;
}
var le4 = (0, import_react96.createContext)(null);
le4.displayName = "PopoverAPIContext";
function ce5(t15) {
  let a15 = (0, import_react96.useContext)(le4);
  if (a15 === null) {
    let u16 = new Error(`<${t15} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u16, ce5), u16;
  }
  return a15;
}
var ve3 = (0, import_react96.createContext)(null);
ve3.displayName = "PopoverGroupContext";
function Ae2() {
  return (0, import_react96.useContext)(ve3);
}
var ae5 = (0, import_react96.createContext)(null);
ae5.displayName = "PopoverPanelContext";
function et2() {
  return (0, import_react96.useContext)(ae5);
}
function tt2(t15, a15) {
  return u2(a15.type, Ze2, t15, a15);
}
var ot2 = "div";
function rt2(t15, a15) {
  var d15;
  let { __demoMode: u16 = false, ...R8 } = t15, y9 = (0, import_react96.useRef)(null), g7 = y(a15, T3((o17) => {
    y9.current = o17;
  })), i11 = (0, import_react96.useRef)([]), l15 = (0, import_react96.useReducer)(tt2, { __demoMode: u16, popoverState: u16 ? 0 : 1, buttons: i11, button: null, buttonId: null, panel: null, panelId: null, beforePanelSentinel: (0, import_react96.createRef)(), afterPanelSentinel: (0, import_react96.createRef)() }), [{ popoverState: f21, button: e7, buttonId: P7, panel: v7, panelId: C7, beforePanelSentinel: E12, afterPanelSentinel: K4 }, r14] = l15, p8 = n9((d15 = y9.current) != null ? d15 : e7), F6 = (0, import_react96.useMemo)(() => {
    if (!e7 || !v7)
      return false;
    for (let S7 of document.querySelectorAll("body > *"))
      if (Number(S7 == null ? void 0 : S7.contains(e7)) ^ Number(S7 == null ? void 0 : S7.contains(v7)))
        return true;
    let o17 = b2(), s16 = o17.indexOf(e7), c13 = (s16 + o17.length - 1) % o17.length, O3 = (s16 + 1) % o17.length, n14 = o17[c13], m13 = o17[O3];
    return !v7.contains(n14) && !v7.contains(m13);
  }, [e7, v7]), _7 = s3(P7), M7 = s3(C7), L9 = (0, import_react96.useMemo)(() => ({ buttonId: _7, panelId: M7, close: () => r14({ type: 1 }) }), [_7, M7, r14]), T12 = Ae2(), h7 = T12 == null ? void 0 : T12.registerPopover, j11 = o4(() => {
    var o17;
    return (o17 = T12 == null ? void 0 : T12.isFocusWithinPopoverGroup()) != null ? o17 : (p8 == null ? void 0 : p8.activeElement) && ((e7 == null ? void 0 : e7.contains(p8.activeElement)) || (v7 == null ? void 0 : v7.contains(p8.activeElement)));
  });
  (0, import_react96.useEffect)(() => h7 == null ? void 0 : h7(L9), [h7, L9]);
  let [x6, $5] = ee(), D9 = j7({ mainTreeNodeRef: T12 == null ? void 0 : T12.mainTreeNodeRef, portals: x6, defaultContainers: [e7, v7] });
  E5(p8 == null ? void 0 : p8.defaultView, "focus", (o17) => {
    var s16, c13, O3, n14;
    o17.target !== window && o17.target instanceof HTMLElement && f21 === 0 && (j11() || e7 && v7 && (D9.contains(o17.target) || (c13 = (s16 = E12.current) == null ? void 0 : s16.contains) != null && c13.call(s16, o17.target) || (n14 = (O3 = K4.current) == null ? void 0 : O3.contains) != null && n14.call(O3, o17.target) || r14({ type: 1 })));
  }, true), w6(D9.resolveContainers, (o17, s16) => {
    r14({ type: 1 }), A2(s16, h4.Loose) || (o17.preventDefault(), e7 == null || e7.focus());
  }, f21 === 0);
  let I5 = o4((o17) => {
    r14({ type: 1 });
    let s16 = (() => o17 ? o17 instanceof HTMLElement ? o17 : "current" in o17 && o17.current instanceof HTMLElement ? o17.current : e7 : e7)();
    s16 == null || s16.focus();
  }), k4 = (0, import_react96.useMemo)(() => ({ close: I5, isPortalled: F6 }), [I5, F6]), J6 = (0, import_react96.useMemo)(() => ({ open: f21 === 0, close: I5 }), [f21, I5]), G8 = { ref: g7 };
  return import_react96.default.createElement(ve2, null, import_react96.default.createElement(ae5.Provider, { value: null }, import_react96.default.createElement(de3.Provider, { value: l15 }, import_react96.default.createElement(le4.Provider, { value: k4 }, import_react96.default.createElement(u7, { value: I5 }, import_react96.default.createElement(s8, { value: u2(f21, { [0]: d9.Open, [1]: d9.Closed }) }, import_react96.default.createElement($5, null, H({ ourProps: G8, theirProps: R8, slot: J6, defaultTag: ot2, name: "Popover" }), import_react96.default.createElement(D9.MainTreeNode, null))))))));
}
var nt2 = "button";
function lt2(t15, a15) {
  let u16 = (0, import_react45.useId)(), { id: R8 = `headlessui-popover-button-${u16}`, disabled: y9 = false, autoFocus: g7 = false, ...i11 } = t15, [l15, f21] = ne("Popover.Button"), { isPortalled: e7 } = ce5("Popover.Button"), P7 = (0, import_react96.useRef)(null), v7 = `headlessui-focus-sentinel-${(0, import_react45.useId)()}`, C7 = Ae2(), E12 = C7 == null ? void 0 : C7.closeOthers, r14 = et2() !== null;
  (0, import_react96.useEffect)(() => {
    if (!r14)
      return f21({ type: 3, buttonId: R8 }), () => {
        f21({ type: 3, buttonId: null });
      };
  }, [r14, R8, f21]);
  let [p8] = (0, import_react96.useState)(() => Symbol()), F6 = y(P7, a15, ye(), r14 ? null : (n14) => {
    if (n14)
      l15.buttons.current.push(p8);
    else {
      let m13 = l15.buttons.current.indexOf(p8);
      m13 !== -1 && l15.buttons.current.splice(m13, 1);
    }
    l15.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), n14 && f21({ type: 2, button: n14 });
  }), _7 = y(P7, a15), M7 = n9(P7), L9 = o4((n14) => {
    var m13, S7, H10;
    if (r14) {
      if (l15.popoverState === 1)
        return;
      switch (n14.key) {
        case o8.Space:
        case o8.Enter:
          n14.preventDefault(), (S7 = (m13 = n14.target).click) == null || S7.call(m13), f21({ type: 1 }), (H10 = l15.button) == null || H10.focus();
          break;
      }
    } else
      switch (n14.key) {
        case o8.Space:
        case o8.Enter:
          n14.preventDefault(), n14.stopPropagation(), l15.popoverState === 1 && (E12 == null || E12(l15.buttonId)), f21({ type: 0 });
          break;
        case o8.Escape:
          if (l15.popoverState !== 0)
            return E12 == null ? void 0 : E12(l15.buttonId);
          if (!P7.current || M7 != null && M7.activeElement && !P7.current.contains(M7.activeElement))
            return;
          n14.preventDefault(), n14.stopPropagation(), f21({ type: 1 });
          break;
      }
  }), T12 = o4((n14) => {
    r14 || n14.key === o8.Space && n14.preventDefault();
  }), h7 = o4((n14) => {
    var m13, S7;
    r5(n14.currentTarget) || y9 || (r14 ? (f21({ type: 1 }), (m13 = l15.button) == null || m13.focus()) : (n14.preventDefault(), n14.stopPropagation(), l15.popoverState === 1 && (E12 == null || E12(l15.buttonId)), f21({ type: 0 }), (S7 = l15.button) == null || S7.focus()));
  }), j11 = o4((n14) => {
    n14.preventDefault(), n14.stopPropagation();
  }), { isFocusVisible: x6, focusProps: $5 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: g7 }), { isHovered: D9, hoverProps: I5 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: y9 }), { pressed: k4, pressProps: J6 } = w({ disabled: y9 }), G8 = l15.popoverState === 0, d15 = (0, import_react96.useMemo)(() => ({ open: G8, active: k4 || G8, disabled: y9, hover: D9, focus: x6, autofocus: g7 }), [G8, D9, x6, k4, y9, g7]), o17 = T8(t15, P7), s16 = r14 ? D({ ref: _7, type: o17, onKeyDown: L9, onClick: h7, disabled: y9 || void 0, autoFocus: g7 }, $5, I5, J6) : D({ ref: F6, id: l15.buttonId, type: o17, "aria-expanded": l15.popoverState === 0, "aria-controls": l15.panel ? l15.panelId : void 0, disabled: y9 || void 0, autoFocus: g7, onKeyDown: L9, onKeyUp: T12, onClick: h7, onMouseDown: j11 }, $5, I5, J6), c13 = n12(), O3 = o4(() => {
    let n14 = l15.panel;
    if (!n14)
      return;
    function m13() {
      u2(c13.current, { [s11.Forwards]: () => P5(n14, F.First), [s11.Backwards]: () => P5(n14, F.Last) }) === T7.Error && P5(b2().filter((H10) => H10.dataset.headlessuiFocusGuard !== "true"), u2(c13.current, { [s11.Forwards]: F.Next, [s11.Backwards]: F.Previous }), { relativeTo: l15.button });
    }
    m13();
  });
  return import_react96.default.createElement(import_react96.default.Fragment, null, H({ ourProps: s16, theirProps: i11, slot: d15, defaultTag: nt2, name: "Popover.Button" }), G8 && !r14 && e7 && import_react96.default.createElement(T2, { id: v7, features: s4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: O3 }));
}
var at2 = "div";
var pt = O.RenderStrategy | O.Static;
function st2(t15, a15) {
  let u16 = (0, import_react45.useId)(), { id: R8 = `headlessui-popover-overlay-${u16}`, ...y9 } = t15, [{ popoverState: g7 }, i11] = ne("Popover.Overlay"), l15 = y(a15), f21 = u12(), e7 = (() => f21 !== null ? (f21 & d9.Open) === d9.Open : g7 === 0)(), P7 = o4((E12) => {
    if (r5(E12.currentTarget))
      return E12.preventDefault();
    i11({ type: 1 });
  }), v7 = (0, import_react96.useMemo)(() => ({ open: g7 === 0 }), [g7]);
  return H({ ourProps: { ref: l15, id: R8, "aria-hidden": true, onClick: P7 }, theirProps: y9, slot: v7, defaultTag: at2, features: pt, visible: e7, name: "Popover.Overlay" });
}
var ut2 = "div";
var it2 = O.RenderStrategy | O.Static;
function ft2(t15, a15) {
  let u16 = (0, import_react45.useId)(), { id: R8 = `headlessui-popover-panel-${u16}`, focus: y9 = false, anchor: g7, portal: i11 = false, modal: l15 = false, ...f21 } = t15, [e7, P7] = ne("Popover.Panel"), { close: v7, isPortalled: C7 } = ce5("Popover.Panel"), E12 = `headlessui-focus-sentinel-before-${u16}`, K4 = `headlessui-focus-sentinel-after-${u16}`, r14 = (0, import_react96.useRef)(null), p8 = xe(g7), [F6, _7] = Re(p8), M7 = be();
  p8 && (i11 = true);
  let L9 = y(r14, a15, p8 ? F6 : null, (d15) => {
    P7({ type: 4, panel: d15 });
  }), T12 = n9(r14), h7 = U();
  n(() => (P7({ type: 5, panelId: R8 }), () => {
    P7({ type: 5, panelId: null });
  }), [R8, P7]);
  let j11 = u12(), x6 = (() => j11 !== null ? (j11 & d9.Open) === d9.Open : e7.popoverState === 0)();
  m6(e7.button, () => P7({ type: 1 }), x6), u10(T12, e7.__demoMode ? false : l15 && x6);
  let $5 = o4((d15) => {
    var o17;
    switch (d15.key) {
      case o8.Escape:
        if (e7.popoverState !== 0 || !r14.current || T12 != null && T12.activeElement && !r14.current.contains(T12.activeElement))
          return;
        d15.preventDefault(), d15.stopPropagation(), P7({ type: 1 }), (o17 = e7.button) == null || o17.focus();
        break;
    }
  });
  (0, import_react96.useEffect)(() => {
    var d15;
    t15.static || e7.popoverState === 1 && ((d15 = t15.unmount) == null || d15) && P7({ type: 4, panel: null });
  }, [e7.popoverState, t15.unmount, t15.static, P7]), (0, import_react96.useEffect)(() => {
    if (e7.__demoMode || !y9 || e7.popoverState !== 0 || !r14.current)
      return;
    let d15 = T12 == null ? void 0 : T12.activeElement;
    r14.current.contains(d15) || P5(r14.current, F.First);
  }, [e7.__demoMode, y9, r14, e7.popoverState]);
  let D9 = (0, import_react96.useMemo)(() => ({ open: e7.popoverState === 0, close: v7 }), [e7, v7]), I5 = D(p8 ? M7() : {}, { ref: L9, id: R8, onKeyDown: $5, onBlur: y9 && e7.popoverState === 0 ? (d15) => {
    var s16, c13, O3, n14, m13;
    let o17 = d15.relatedTarget;
    o17 && r14.current && ((s16 = r14.current) != null && s16.contains(o17) || (P7({ type: 1 }), ((O3 = (c13 = e7.beforePanelSentinel.current) == null ? void 0 : c13.contains) != null && O3.call(c13, o17) || (m13 = (n14 = e7.afterPanelSentinel.current) == null ? void 0 : n14.contains) != null && m13.call(n14, o17)) && o17.focus({ preventScroll: true })));
  } : void 0, tabIndex: -1, style: { ..._7, "--button-width": f7(e7.button, true).width } }), k4 = n12(), J6 = o4(() => {
    let d15 = r14.current;
    if (!d15)
      return;
    function o17() {
      u2(k4.current, { [s11.Forwards]: () => {
        var c13;
        P5(d15, F.First) === T7.Error && ((c13 = e7.afterPanelSentinel.current) == null || c13.focus());
      }, [s11.Backwards]: () => {
        var s16;
        (s16 = e7.button) == null || s16.focus({ preventScroll: true });
      } });
    }
    o17();
  }), G8 = o4(() => {
    let d15 = r14.current;
    if (!d15)
      return;
    function o17() {
      u2(k4.current, { [s11.Forwards]: () => {
        var S7;
        if (!e7.button)
          return;
        let s16 = b2(), c13 = s16.indexOf(e7.button), O3 = s16.slice(0, c13 + 1), m13 = [...s16.slice(c13 + 1), ...O3];
        for (let H10 of m13.slice())
          if (H10.dataset.headlessuiFocusGuard === "true" || (S7 = e7.panel) != null && S7.contains(H10)) {
            let Te3 = m13.indexOf(H10);
            Te3 !== -1 && m13.splice(Te3, 1);
          }
        P5(m13, F.First, { sorted: false });
      }, [s11.Backwards]: () => {
        var c13;
        P5(d15, F.Previous) === T7.Error && ((c13 = e7.button) == null || c13.focus());
      } });
    }
    o17();
  });
  return import_react96.default.createElement(ae5.Provider, { value: R8 }, import_react96.default.createElement(le4.Provider, { value: { close: v7, isPortalled: C7 } }, import_react96.default.createElement(te, { enabled: i11 ? t15.static || x6 : false }, x6 && C7 && import_react96.default.createElement(T2, { id: E12, ref: e7.beforePanelSentinel, features: s4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: J6 }), H({ mergeRefs: h7, ourProps: I5, theirProps: f21, slot: D9, defaultTag: ut2, features: it2, visible: x6, name: "Popover.Panel" }), x6 && C7 && import_react96.default.createElement(T2, { id: K4, ref: e7.afterPanelSentinel, features: s4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: G8 }))));
}
var Pt2 = "div";
function dt(t15, a15) {
  let u16 = (0, import_react96.useRef)(null), R8 = y(u16, a15), [y9, g7] = (0, import_react96.useState)([]), i11 = y6(), l15 = o4((r14) => {
    g7((p8) => {
      let F6 = p8.indexOf(r14);
      if (F6 !== -1) {
        let _7 = p8.slice();
        return _7.splice(F6, 1), _7;
      }
      return p8;
    });
  }), f21 = o4((r14) => (g7((p8) => [...p8, r14]), () => l15(r14))), e7 = o4(() => {
    var F6;
    let r14 = u(u16);
    if (!r14)
      return false;
    let p8 = r14.activeElement;
    return (F6 = u16.current) != null && F6.contains(p8) ? true : y9.some((_7) => {
      var M7, L9;
      return ((M7 = r14.getElementById(_7.buttonId.current)) == null ? void 0 : M7.contains(p8)) || ((L9 = r14.getElementById(_7.panelId.current)) == null ? void 0 : L9.contains(p8));
    });
  }), P7 = o4((r14) => {
    for (let p8 of y9)
      p8.buttonId.current !== r14 && p8.close();
  }), v7 = (0, import_react96.useMemo)(() => ({ registerPopover: f21, unregisterPopover: l15, isFocusWithinPopoverGroup: e7, closeOthers: P7, mainTreeNodeRef: i11.mainTreeNodeRef }), [f21, l15, e7, P7, i11.mainTreeNodeRef]), C7 = (0, import_react96.useMemo)(() => ({}), []), E12 = t15, K4 = { ref: R8 };
  return import_react96.default.createElement(ve3.Provider, { value: v7 }, H({ ourProps: K4, theirProps: E12, slot: C7, defaultTag: Pt2, name: "Popover.Group" }), import_react96.default.createElement(i11.MainTreeNode, null));
}
var ct2 = I(rt2);
var vt2 = I(lt2);
var Tt2 = I(st2);
var mt2 = I(ft2);
var yt2 = I(dt);
var qt = Object.assign(ct2, { Button: vt2, Overlay: Tt2, Panel: mt2, Group: yt2 });

// node_modules/@headlessui/react/dist/components/radio-group/radio-group.js
var import_react97 = __toESM(require_react(), 1);
var Ce3 = ((e7) => (e7[e7.RegisterOption = 0] = "RegisterOption", e7[e7.UnregisterOption = 1] = "UnregisterOption", e7))(Ce3 || {});
var he2 = { [0](o17, t15) {
  let e7 = [...o17.options, { id: t15.id, element: t15.element, propsRef: t15.propsRef }];
  return { ...o17, options: _2(e7, (a15) => a15.element.current) };
}, [1](o17, t15) {
  let e7 = o17.options.slice(), a15 = o17.options.findIndex((O3) => O3.id === t15.id);
  return a15 === -1 ? o17 : (e7.splice(a15, 1), { ...o17, options: e7 });
} };
var V3 = (0, import_react97.createContext)(null);
V3.displayName = "RadioGroupDataContext";
function J5(o17) {
  let t15 = (0, import_react97.useContext)(V3);
  if (t15 === null) {
    let e7 = new Error(`<${o17} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e7, J5), e7;
  }
  return t15;
}
var X2 = (0, import_react97.createContext)(null);
X2.displayName = "RadioGroupActionsContext";
function z3(o17) {
  let t15 = (0, import_react97.useContext)(X2);
  if (t15 === null) {
    let e7 = new Error(`<${o17} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e7, z3), e7;
  }
  return t15;
}
function Le2(o17, t15) {
  return u2(t15.type, he2, o17, t15);
}
var ke3 = "div";
function Fe2(o17, t15) {
  let e7 = (0, import_react45.useId)(), a15 = a3(), { id: O3 = `headlessui-radiogroup-${e7}`, value: T12, defaultValue: y9, form: p8, name: d15, onChange: u16, by: c13, disabled: m13 = a15 || false, ...R8 } = o17, f21 = u8(c13), [P7, C7] = (0, import_react97.useReducer)(Le2, { options: [] }), n14 = P7.options, [U6, h7] = z(), [v7, L9] = U2(), D9 = (0, import_react97.useRef)(null), M7 = y(D9, t15), [r14, A6] = T(T12, u16, y9), k4 = (0, import_react97.useMemo)(() => n14.find((i11) => !i11.propsRef.current.disabled), [n14]), b7 = (0, import_react97.useMemo)(() => n14.some((i11) => f21(i11.propsRef.current.value, r14)), [n14, r14]), l15 = o4((i11) => {
    var s16;
    if (m13 || f21(i11, r14))
      return false;
    let F6 = (s16 = n14.find((H10) => f21(H10.propsRef.current.value, i11))) == null ? void 0 : s16.propsRef.current;
    return F6 != null && F6.disabled ? false : (A6 == null || A6(i11), true);
  }), _7 = o4((i11) => {
    let F6 = D9.current;
    if (!F6)
      return;
    let s16 = u(F6), H10 = n14.filter((g7) => g7.propsRef.current.disabled === false).map((g7) => g7.element.current);
    switch (i11.key) {
      case o8.Enter:
        p2(i11.currentTarget);
        break;
      case o8.ArrowLeft:
      case o8.ArrowUp:
        if (i11.preventDefault(), i11.stopPropagation(), P5(H10, F.Previous | F.WrapAround) === T7.Success) {
          let E12 = n14.find((N5) => N5.element.current === (s16 == null ? void 0 : s16.activeElement));
          E12 && l15(E12.propsRef.current.value);
        }
        break;
      case o8.ArrowRight:
      case o8.ArrowDown:
        if (i11.preventDefault(), i11.stopPropagation(), P5(H10, F.Next | F.WrapAround) === T7.Success) {
          let E12 = n14.find((N5) => N5.element.current === (s16 == null ? void 0 : s16.activeElement));
          E12 && l15(E12.propsRef.current.value);
        }
        break;
      case o8.Space:
        {
          i11.preventDefault(), i11.stopPropagation();
          let g7 = n14.find((E12) => E12.element.current === (s16 == null ? void 0 : s16.activeElement));
          g7 && l15(g7.propsRef.current.value);
        }
        break;
    }
  }), q7 = o4((i11) => (C7({ type: 0, ...i11 }), () => C7({ type: 1, id: i11.id }))), de5 = (0, import_react97.useMemo)(() => ({ value: r14, firstOption: k4, containsCheckedOption: b7, disabled: m13, compare: f21, ...P7 }), [r14, k4, b7, m13, f21, P7]), ue4 = (0, import_react97.useMemo)(() => ({ registerOption: q7, change: l15 }), [q7, l15]), ce8 = { ref: M7, id: O3, role: "radiogroup", "aria-labelledby": U6, "aria-describedby": v7, onKeyDown: _7 }, fe3 = (0, import_react97.useMemo)(() => ({ value: r14 }), [r14]), Te3 = (0, import_react97.useCallback)(() => l15(y9), [l15]);
  return import_react97.default.createElement(L9, { name: "RadioGroup.Description" }, import_react97.default.createElement(h7, { name: "RadioGroup.Label" }, import_react97.default.createElement(X2.Provider, { value: ue4 }, import_react97.default.createElement(V3.Provider, { value: de5 }, d15 != null && import_react97.default.createElement(j2, { disabled: m13, data: { [d15]: r14 || "on" }, overrides: { type: "radio", checked: r14 != null }, form: p8, onReset: Te3 }), H({ ourProps: ce8, theirProps: R8, slot: fe3, defaultTag: ke3, name: "RadioGroup" })))));
}
var Ie = "div";
function Ue2(o17, t15) {
  var b7;
  let e7 = J5("RadioGroup.Option"), a15 = z3("RadioGroup.Option"), O3 = (0, import_react45.useId)(), { id: T12 = `headlessui-radiogroup-option-${O3}`, value: y9, disabled: p8 = e7.disabled || false, autoFocus: d15 = false, ...u16 } = o17, c13 = (0, import_react97.useRef)(null), m13 = y(c13, t15), [R8, f21] = z(), [P7, C7] = U2(), n14 = s3({ value: y9, disabled: p8 });
  n(() => a15.registerOption({ id: T12, element: c13, propsRef: n14 }), [T12, a15, c13, n14]);
  let U6 = o4((l15) => {
    var _7;
    if (r5(l15.currentTarget))
      return l15.preventDefault();
    a15.change(y9) && ((_7 = c13.current) == null || _7.focus());
  }), h7 = ((b7 = e7.firstOption) == null ? void 0 : b7.id) === T12, { isFocusVisible: v7, focusProps: L9 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: d15 }), { isHovered: D9, hoverProps: M7 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: p8 }), r14 = e7.compare(e7.value, y9), A6 = D({ ref: m13, id: T12, role: "radio", "aria-checked": r14 ? "true" : "false", "aria-labelledby": R8, "aria-describedby": P7, "aria-disabled": p8 ? true : void 0, tabIndex: (() => p8 ? -1 : r14 || !e7.containsCheckedOption && h7 ? 0 : -1)(), onClick: p8 ? void 0 : U6, autoFocus: d15 }, L9, M7), k4 = (0, import_react97.useMemo)(() => ({ checked: r14, disabled: p8, active: v7, hover: D9, focus: v7, autofocus: d15 }), [r14, p8, D9, v7, d15]);
  return import_react97.default.createElement(C7, { name: "RadioGroup.Description" }, import_react97.default.createElement(f21, { name: "RadioGroup.Label" }, H({ ourProps: A6, theirProps: u16, slot: k4, defaultTag: Ie, name: "RadioGroup.Option" })));
}
var Me = "span";
function Se2(o17, t15) {
  var b7;
  let e7 = J5("Radio"), a15 = z3("Radio"), O3 = (0, import_react45.useId)(), T12 = u4(), y9 = a3(), { id: p8 = T12 || `headlessui-radio-${O3}`, value: d15, disabled: u16 = e7.disabled || y9 || false, autoFocus: c13 = false, ...m13 } = o17, R8 = (0, import_react97.useRef)(null), f21 = y(R8, t15), P7 = I2(), C7 = G(), n14 = s3({ value: d15, disabled: u16 });
  n(() => a15.registerOption({ id: p8, element: R8, propsRef: n14 }), [p8, a15, R8, n14]);
  let U6 = o4((l15) => {
    var _7;
    if (r5(l15.currentTarget))
      return l15.preventDefault();
    a15.change(d15) && ((_7 = R8.current) == null || _7.focus());
  }), { isFocusVisible: h7, focusProps: v7 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: c13 }), { isHovered: L9, hoverProps: D9 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: u16 }), M7 = ((b7 = e7.firstOption) == null ? void 0 : b7.id) === p8, r14 = e7.compare(e7.value, d15), A6 = D({ ref: f21, id: p8, role: "radio", "aria-checked": r14 ? "true" : "false", "aria-labelledby": P7, "aria-describedby": C7, "aria-disabled": u16 ? true : void 0, tabIndex: (() => u16 ? -1 : r14 || !e7.containsCheckedOption && M7 ? 0 : -1)(), autoFocus: c13, onClick: u16 ? void 0 : U6 }, v7, D9), k4 = (0, import_react97.useMemo)(() => ({ checked: r14, disabled: u16, hover: L9, focus: h7, autofocus: c13 }), [r14, u16, L9, h7, c13]);
  return H({ ourProps: A6, theirProps: m13, slot: k4, defaultTag: Me, name: "Radio" });
}
var He3 = I(Fe2);
var we4 = I(Ue2);
var Ne3 = I(Se2);
var We3 = K;
var Be4 = w3;
var ut3 = Object.assign(He3, { Option: we4, Radio: Ne3, Label: We3, Description: Be4 });

// node_modules/@headlessui/react/dist/components/select/select.js
var import_react98 = __toESM(require_react(), 1);
var H8 = "select";
function B2(a15, i11) {
  let p8 = (0, import_react45.useId)(), d15 = u4(), n14 = a3(), { id: c13 = d15 || `headlessui-select-${p8}`, disabled: e7 = n14 || false, invalid: t15 = false, autoFocus: o17 = false, ...f21 } = a15, m13 = I2(), u16 = G(), { isFocusVisible: r14, focusProps: T12 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: o17 }), { isHovered: l15, hoverProps: b7 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e7 }), { pressed: s16, pressProps: y9 } = w({ disabled: e7 }), P7 = D({ ref: i11, id: c13, "aria-labelledby": m13, "aria-describedby": u16, "aria-invalid": t15 ? "" : void 0, disabled: e7 || void 0, autoFocus: o17 }, T12, b7, y9), S7 = (0, import_react98.useMemo)(() => ({ disabled: e7, invalid: t15, hover: l15, focus: r14, active: s16, autofocus: o17 }), [e7, t15, l15, r14, s16, o17]);
  return H({ ourProps: P7, theirProps: f21, slot: S7, defaultTag: H8, name: "Select" });
}
var $4 = I(B2);

// node_modules/@headlessui/react/dist/components/switch/switch.js
var import_react99 = __toESM(require_react(), 1);
var y7 = (0, import_react99.createContext)(null);
y7.displayName = "GroupContext";
var Se3 = import_react99.Fragment;
function we5(n14) {
  var i11;
  let [o17, s16] = (0, import_react99.useState)(null), [f21, b7] = z(), [h7, t15] = U2(), p8 = (0, import_react99.useMemo)(() => ({ switch: o17, setSwitch: s16 }), [o17, s16]), c13 = {}, T12 = n14;
  return import_react99.default.createElement(t15, { name: "Switch.Description", value: h7 }, import_react99.default.createElement(b7, { name: "Switch.Label", value: f21, props: { htmlFor: (i11 = p8.switch) == null ? void 0 : i11.id, onClick(u16) {
    o17 && (u16.currentTarget instanceof HTMLLabelElement && u16.preventDefault(), o17.click(), o17.focus({ preventScroll: true }));
  } } }, import_react99.default.createElement(y7.Provider, { value: p8 }, H({ ourProps: c13, theirProps: T12, slot: {}, defaultTag: Se3, name: "Switch.Group" }))));
}
var _e = "button";
function Pe3(n14, o17) {
  var x6;
  let s16 = (0, import_react45.useId)(), f21 = u4(), b7 = a3(), { id: h7 = f21 || `headlessui-switch-${s16}`, disabled: t15 = b7 || false, checked: p8, defaultChecked: c13 = false, onChange: T12, name: i11, value: u16, form: A6, autoFocus: d15 = false, ...F6 } = n14, S7 = (0, import_react99.useContext)(y7), w10 = (0, import_react99.useRef)(null), k4 = y(w10, o17, S7 === null ? null : S7.setSwitch), [a15, r14] = T(p8, T12, c13), H10 = p(), [_7, P7] = (0, import_react99.useState)(false), E12 = o4(() => {
    P7(true), r14 == null || r14(!a15), H10.nextFrame(() => {
      P7(false);
    });
  }), M7 = o4((e7) => {
    if (r5(e7.currentTarget))
      return e7.preventDefault();
    e7.preventDefault(), E12();
  }), U6 = o4((e7) => {
    e7.key === o8.Space ? (e7.preventDefault(), E12()) : e7.key === o8.Enter && p2(e7.currentTarget);
  }), I5 = o4((e7) => e7.preventDefault()), B4 = I2(), K4 = G(), { isFocusVisible: g7, focusProps: W7 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: d15 }), { isHovered: D9, hoverProps: O3 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: t15 }), { pressed: v7, pressProps: N5 } = w({ disabled: t15 }), J6 = (0, import_react99.useMemo)(() => ({ checked: a15, disabled: t15, hover: D9, focus: g7, active: v7, autofocus: d15, changing: _7 }), [a15, D9, g7, v7, t15, _7, d15]), X3 = D({ id: h7, ref: k4, role: "switch", type: T8(n14, w10), tabIndex: n14.tabIndex === -1 ? 0 : (x6 = n14.tabIndex) != null ? x6 : 0, "aria-checked": a15, "aria-labelledby": B4, "aria-describedby": K4, disabled: t15 || void 0, autoFocus: d15, onClick: M7, onKeyUp: U6, onKeyPress: I5 }, W7, O3, N5), j11 = (0, import_react99.useCallback)(() => r14 == null ? void 0 : r14(c13), [r14]);
  return import_react99.default.createElement(import_react99.default.Fragment, null, i11 != null && import_react99.default.createElement(j2, { disabled: t15, data: { [i11]: u16 || "on" }, overrides: { type: "checkbox", checked: a15 }, form: A6, onReset: j11 }), H({ ourProps: X3, theirProps: F6, slot: J6, defaultTag: _e, name: "Switch" }));
}
var Ee3 = I(Pe3);
var ge2 = we5;
var De3 = K;
var ve4 = w3;
var je3 = Object.assign(Ee3, { Group: ge2, Label: De3, Description: ve4 });

// node_modules/@headlessui/react/dist/components/tabs/tabs.js
var import_react101 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/focus-sentinel.js
var import_react100 = __toESM(require_react(), 1);
function b6({ onFocus: n14 }) {
  let [r14, o17] = (0, import_react100.useState)(true), u16 = f17();
  return r14 ? import_react100.default.createElement(T2, { as: "button", type: "button", features: s4.Focusable, onFocus: (a15) => {
    a15.preventDefault();
    let e7, i11 = 50;
    function t15() {
      if (i11-- <= 0) {
        e7 && cancelAnimationFrame(e7);
        return;
      }
      if (n14()) {
        if (cancelAnimationFrame(e7), !u16.current)
          return;
        o17(false);
        return;
      }
      e7 = requestAnimationFrame(t15);
    }
    e7 = requestAnimationFrame(t15);
  } }) : null;
}

// node_modules/@headlessui/react/dist/utils/stable-collection.js
var r13 = __toESM(require_react(), 1);
var s15 = r13.createContext(null);
function a14() {
  return { groups: /* @__PURE__ */ new Map(), get(n14, t15) {
    var c13;
    let e7 = this.groups.get(n14);
    e7 || (e7 = /* @__PURE__ */ new Map(), this.groups.set(n14, e7));
    let l15 = (c13 = e7.get(t15)) != null ? c13 : 0;
    e7.set(t15, l15 + 1);
    let o17 = Array.from(e7.keys()).indexOf(t15);
    function i11() {
      let u16 = e7.get(t15);
      u16 > 1 ? e7.set(t15, u16 - 1) : e7.delete(t15);
    }
    return [o17, i11];
  } };
}
function C5({ children: n14 }) {
  let t15 = r13.useRef(a14());
  return r13.createElement(s15.Provider, { value: t15 }, n14);
}
function d14(n14) {
  let t15 = r13.useContext(s15);
  if (!t15)
    throw new Error("You must wrap your component in a <StableCollection>");
  let e7 = f19(), [l15, o17] = t15.current.get(n14, e7);
  return r13.useEffect(() => o17, []), l15;
}
function f19() {
  var l15, o17, i11;
  let n14 = (i11 = (o17 = (l15 = r13.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) == null ? void 0 : l15.ReactCurrentOwner) == null ? void 0 : o17.current) != null ? i11 : null;
  if (!n14)
    return Symbol();
  let t15 = [], e7 = n14;
  for (; e7; )
    t15.push(e7.index), e7 = e7.return;
  return "$." + t15.join(".");
}

// node_modules/@headlessui/react/dist/components/tabs/tabs.js
var Ae3 = ((t15) => (t15[t15.Forwards = 0] = "Forwards", t15[t15.Backwards = 1] = "Backwards", t15))(Ae3 || {});
var Ee4 = ((o17) => (o17[o17.Less = -1] = "Less", o17[o17.Equal = 0] = "Equal", o17[o17.Greater = 1] = "Greater", o17))(Ee4 || {});
var Re4 = ((n14) => (n14[n14.SetSelectedIndex = 0] = "SetSelectedIndex", n14[n14.RegisterTab = 1] = "RegisterTab", n14[n14.UnregisterTab = 2] = "UnregisterTab", n14[n14.RegisterPanel = 3] = "RegisterPanel", n14[n14.UnregisterPanel = 4] = "UnregisterPanel", n14))(Re4 || {});
var Le3 = { [0](e7, r14) {
  var c13;
  let t15 = _2(e7.tabs, (T12) => T12.current), o17 = _2(e7.panels, (T12) => T12.current), a15 = t15.filter((T12) => {
    var d15;
    return !((d15 = T12.current) != null && d15.hasAttribute("disabled"));
  }), n14 = { ...e7, tabs: t15, panels: o17 };
  if (r14.index < 0 || r14.index > t15.length - 1) {
    let T12 = u2(Math.sign(r14.index - e7.selectedIndex), { [-1]: () => 1, [0]: () => u2(Math.sign(r14.index), { [-1]: () => 0, [0]: () => 0, [1]: () => 1 }), [1]: () => 0 });
    if (a15.length === 0)
      return n14;
    let d15 = u2(T12, { [0]: () => t15.indexOf(a15[0]), [1]: () => t15.indexOf(a15[a15.length - 1]) });
    return { ...n14, selectedIndex: d15 === -1 ? e7.selectedIndex : d15 };
  }
  let u16 = t15.slice(0, r14.index), x6 = [...t15.slice(r14.index), ...u16].find((T12) => a15.includes(T12));
  if (!x6)
    return n14;
  let f21 = (c13 = t15.indexOf(x6)) != null ? c13 : e7.selectedIndex;
  return f21 === -1 && (f21 = e7.selectedIndex), { ...n14, selectedIndex: f21 };
}, [1](e7, r14) {
  if (e7.tabs.includes(r14.tab))
    return e7;
  let t15 = e7.tabs[e7.selectedIndex], o17 = _2([...e7.tabs, r14.tab], (n14) => n14.current), a15 = e7.selectedIndex;
  return e7.info.current.isControlled || (a15 = o17.indexOf(t15), a15 === -1 && (a15 = e7.selectedIndex)), { ...e7, tabs: o17, selectedIndex: a15 };
}, [2](e7, r14) {
  return { ...e7, tabs: e7.tabs.filter((t15) => t15 !== r14.tab) };
}, [3](e7, r14) {
  return e7.panels.includes(r14.panel) ? e7 : { ...e7, panels: _2([...e7.panels, r14.panel], (t15) => t15.current) };
}, [4](e7, r14) {
  return { ...e7, panels: e7.panels.filter((t15) => t15 !== r14.panel) };
} };
var z5 = (0, import_react101.createContext)(null);
z5.displayName = "TabsDataContext";
function C6(e7) {
  let r14 = (0, import_react101.useContext)(z5);
  if (r14 === null) {
    let t15 = new Error(`<${e7} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t15, C6), t15;
  }
  return r14;
}
var V4 = (0, import_react101.createContext)(null);
V4.displayName = "TabsActionsContext";
function Q4(e7) {
  let r14 = (0, import_react101.useContext)(V4);
  if (r14 === null) {
    let t15 = new Error(`<${e7} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t15, Q4), t15;
  }
  return r14;
}
function _e2(e7, r14) {
  return u2(r14.type, Le3, e7, r14);
}
var De4 = "div";
function Se4(e7, r14) {
  let { defaultIndex: t15 = 0, vertical: o17 = false, manual: a15 = false, onChange: n14, selectedIndex: u16 = null, ..._7 } = e7;
  const x6 = o17 ? "vertical" : "horizontal", f21 = a15 ? "manual" : "auto";
  let c13 = u16 !== null, T12 = s3({ isControlled: c13 }), d15 = y(r14), [i11, s16] = (0, import_react101.useReducer)(_e2, { info: T12, selectedIndex: u16 != null ? u16 : t15, tabs: [], panels: [] }), F6 = (0, import_react101.useMemo)(() => ({ selectedIndex: i11.selectedIndex }), [i11.selectedIndex]), M7 = s3(n14 || (() => {
  })), b7 = s3(i11.tabs), m13 = (0, import_react101.useMemo)(() => ({ orientation: x6, activation: f21, ...i11 }), [x6, f21, i11]), E12 = o4((p8) => (s16({ type: 1, tab: p8 }), () => s16({ type: 2, tab: p8 }))), I5 = o4((p8) => (s16({ type: 3, panel: p8 }), () => s16({ type: 4, panel: p8 }))), g7 = o4((p8) => {
    R8.current !== p8 && M7.current(p8), c13 || s16({ type: 0, index: p8 });
  }), R8 = s3(c13 ? e7.selectedIndex : i11.selectedIndex), J6 = (0, import_react101.useMemo)(() => ({ registerTab: E12, registerPanel: I5, change: g7 }), []);
  n(() => {
    s16({ type: 0, index: u16 != null ? u16 : t15 });
  }, [u16]), n(() => {
    if (R8.current === void 0 || i11.tabs.length <= 0)
      return;
    let p8 = _2(i11.tabs, (L9) => L9.current);
    p8.some((L9, B4) => i11.tabs[B4] !== L9) && g7(p8.indexOf(i11.tabs[R8.current]));
  });
  let k4 = { ref: d15 };
  return import_react101.default.createElement(C5, null, import_react101.default.createElement(V4.Provider, { value: J6 }, import_react101.default.createElement(z5.Provider, { value: m13 }, m13.tabs.length <= 0 && import_react101.default.createElement(b6, { onFocus: () => {
    var p8, h7;
    for (let L9 of b7.current)
      if (((p8 = L9.current) == null ? void 0 : p8.tabIndex) === 0)
        return (h7 = L9.current) == null || h7.focus(), true;
    return false;
  } }), H({ ourProps: k4, theirProps: _7, slot: F6, defaultTag: De4, name: "Tabs" }))));
}
var Fe3 = "div";
function Ie2(e7, r14) {
  let { orientation: t15, selectedIndex: o17 } = C6("Tab.List"), a15 = y(r14), n14 = (0, import_react101.useMemo)(() => ({ selectedIndex: o17 }), [o17]);
  return H({ ourProps: { ref: a15, role: "tablist", "aria-orientation": t15 }, theirProps: e7, slot: n14, defaultTag: Fe3, name: "Tabs.List" });
}
var he3 = "button";
function ve5(e7, r14) {
  var Y5, Z7;
  let t15 = (0, import_react45.useId)(), { id: o17 = `headlessui-tabs-tab-${t15}`, disabled: a15 = false, autoFocus: n14 = false, ...u16 } = e7, { orientation: _7, activation: x6, selectedIndex: f21, tabs: c13, panels: T12 } = C6("Tab"), d15 = Q4("Tab"), i11 = C6("Tab"), s16 = (0, import_react101.useRef)(null), F6 = y(s16, r14);
  n(() => d15.registerTab(s16), [d15, s16]);
  let M7 = d14("tabs"), b7 = c13.indexOf(s16);
  b7 === -1 && (b7 = M7);
  let m13 = b7 === f21, E12 = o4((l15) => {
    var X3;
    let A6 = l15();
    if (A6 === T7.Success && x6 === "auto") {
      let $5 = (X3 = u(s16)) == null ? void 0 : X3.activeElement, ee6 = i11.tabs.findIndex((Te3) => Te3.current === $5);
      ee6 !== -1 && d15.change(ee6);
    }
    return A6;
  }), I5 = o4((l15) => {
    let A6 = c13.map(($5) => $5.current).filter(Boolean);
    if (l15.key === o8.Space || l15.key === o8.Enter) {
      l15.preventDefault(), l15.stopPropagation(), d15.change(b7);
      return;
    }
    switch (l15.key) {
      case o8.Home:
      case o8.PageUp:
        return l15.preventDefault(), l15.stopPropagation(), E12(() => P5(A6, F.First));
      case o8.End:
      case o8.PageDown:
        return l15.preventDefault(), l15.stopPropagation(), E12(() => P5(A6, F.Last));
    }
    if (E12(() => u2(_7, { vertical() {
      return l15.key === o8.ArrowUp ? P5(A6, F.Previous | F.WrapAround) : l15.key === o8.ArrowDown ? P5(A6, F.Next | F.WrapAround) : T7.Error;
    }, horizontal() {
      return l15.key === o8.ArrowLeft ? P5(A6, F.Previous | F.WrapAround) : l15.key === o8.ArrowRight ? P5(A6, F.Next | F.WrapAround) : T7.Error;
    } })) === T7.Success)
      return l15.preventDefault();
  }), g7 = (0, import_react101.useRef)(false), R8 = o4(() => {
    var l15;
    g7.current || (g7.current = true, (l15 = s16.current) == null || l15.focus({ preventScroll: true }), d15.change(b7), t(() => {
      g7.current = false;
    }));
  }), J6 = o4((l15) => {
    l15.preventDefault();
  }), { isFocusVisible: k4, focusProps: p8 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: n14 }), { isHovered: h7, hoverProps: L9 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: a15 }), { pressed: B4, pressProps: ie2 } = w({ disabled: a15 }), pe5 = (0, import_react101.useMemo)(() => ({ selected: m13, hover: h7, active: B4, focus: k4, autofocus: n14, disabled: a15 }), [m13, h7, k4, B4, n14, a15]), ue4 = D({ ref: F6, onKeyDown: I5, onMouseDown: J6, onClick: R8, id: o17, role: "tab", type: T8(e7, s16), "aria-controls": (Z7 = (Y5 = T12[b7]) == null ? void 0 : Y5.current) == null ? void 0 : Z7.id, "aria-selected": m13, tabIndex: m13 ? 0 : -1, disabled: a15 || void 0, autoFocus: n14 }, p8, L9, ie2);
  return H({ ourProps: ue4, theirProps: u16, slot: pe5, defaultTag: he3, name: "Tabs.Tab" });
}
var Ce4 = "div";
function Me2(e7, r14) {
  let { selectedIndex: t15 } = C6("Tab.Panels"), o17 = y(r14), a15 = (0, import_react101.useMemo)(() => ({ selectedIndex: t15 }), [t15]);
  return H({ ourProps: { ref: o17 }, theirProps: e7, slot: a15, defaultTag: Ce4, name: "Tabs.Panels" });
}
var Ge = "div";
var Ue3 = O.RenderStrategy | O.Static;
function He4(e7, r14) {
  var E12, I5, g7, R8;
  let t15 = (0, import_react45.useId)(), { id: o17 = `headlessui-tabs-panel-${t15}`, tabIndex: a15 = 0, ...n14 } = e7, { selectedIndex: u16, tabs: _7, panels: x6 } = C6("Tab.Panel"), f21 = Q4("Tab.Panel"), c13 = (0, import_react101.useRef)(null), T12 = y(c13, r14);
  n(() => f21.registerPanel(c13), [f21, c13]);
  let d15 = d14("panels"), i11 = x6.indexOf(c13);
  i11 === -1 && (i11 = d15);
  let s16 = i11 === u16, { isFocusVisible: F6, focusProps: M7 } = $f7dceffc5ad7768b$export$4e328f61c538687f(), b7 = (0, import_react101.useMemo)(() => ({ selected: s16, focus: F6 }), [s16, F6]), m13 = D({ ref: T12, id: o17, role: "tabpanel", "aria-labelledby": (I5 = (E12 = _7[i11]) == null ? void 0 : E12.current) == null ? void 0 : I5.id, tabIndex: s16 ? a15 : -1 }, M7);
  return !s16 && ((g7 = n14.unmount) == null || g7) && !((R8 = n14.static) != null && R8) ? import_react101.default.createElement(T2, { as: "span", "aria-hidden": "true", ...m13 }) : H({ ourProps: m13, theirProps: n14, slot: b7, defaultTag: Ge, features: Ue3, visible: s16, name: "Tabs.Panel" });
}
var we6 = I(ve5);
var Oe = I(Se4);
var Ne4 = I(Ie2);
var ke4 = I(Me2);
var Be5 = I(He4);
var st3 = Object.assign(we6, { Group: Oe, List: Ne4, Panels: ke4, Panel: Be5 });

// node_modules/@headlessui/react/dist/components/textarea/textarea.js
var import_react102 = __toESM(require_react(), 1);
var L7 = "textarea";
function H9(s16, l15) {
  let i11 = (0, import_react45.useId)(), p8 = u4(), d15 = a3(), { id: n14 = p8 || `headlessui-textarea-${i11}`, disabled: e7 = d15 || false, autoFocus: r14 = false, invalid: a15 = false, ...T12 } = s16, f21 = I2(), m13 = G(), { isFocused: o17, focusProps: u16 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: r14 }), { isHovered: t15, hoverProps: b7 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e7 }), y9 = D({ ref: l15, id: n14, "aria-labelledby": f21, "aria-describedby": m13, "aria-invalid": a15 ? "" : void 0, disabled: e7 || void 0, autoFocus: r14 }, u16, b7), x6 = (0, import_react102.useMemo)(() => ({ disabled: e7, invalid: a15, hover: t15, focus: o17, autofocus: r14 }), [e7, a15, t15, o17, r14]);
  return H({ ourProps: y9, theirProps: T12, slot: x6, defaultTag: L7, name: "Textarea" });
}
var w9 = I(H9);

// node_modules/@headlessui/react/dist/components/transition/transition.js
var import_react105 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react103 = __toESM(require_react(), 1);
function c12(a15 = 0) {
  let [l15, r14] = (0, import_react103.useState)(a15), t15 = f17(), o17 = (0, import_react103.useCallback)((e7) => {
    t15.current && r14((u16) => u16 | e7);
  }, [l15, t15]), m13 = (0, import_react103.useCallback)((e7) => !!(l15 & e7), [l15]), s16 = (0, import_react103.useCallback)((e7) => {
    t15.current && r14((u16) => u16 & ~e7);
  }, [r14, t15]), g7 = (0, import_react103.useCallback)((e7) => {
    t15.current && r14((u16) => u16 ^ e7);
  }, [r14]);
  return { flags: l15, addFlag: o17, hasFlag: m13, removeFlag: s16, toggleFlag: g7 };
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
var import_react104 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/once.js
function l14(r14) {
  let e7 = { called: false };
  return (...t15) => {
    if (!e7.called)
      return e7.called = true, r14(...t15);
  };
}

// node_modules/@headlessui/react/dist/components/transition/utils/transition.js
function v5(t15, ...r14) {
  t15 && r14.length > 0 && t15.classList.add(...r14);
}
function T10(t15, ...r14) {
  t15 && r14.length > 0 && t15.classList.remove(...r14);
}
function L8(t15, r14) {
  let n14 = l14(r14), e7 = o2();
  if (!t15)
    return e7.dispose;
  let { transitionDuration: o17, transitionDelay: m13 } = getComputedStyle(t15), [s16, u16] = [o17, m13].map((a15) => {
    let [i11 = 0] = a15.split(",").filter(Boolean).map((l15) => l15.includes("ms") ? parseFloat(l15) : parseFloat(l15) * 1e3).sort((l15, f21) => f21 - l15);
    return i11;
  }), p8 = s16 + u16;
  if (p8 !== 0) {
    let a15 = e7.group((i11) => {
      let l15 = i11.setTimeout(() => {
        n14(), i11.dispose();
      }, p8);
      i11.addEventListener(t15, "transitionrun", (f21) => {
        f21.target === f21.currentTarget && (l15(), i11.addEventListener(t15, "transitioncancel", (b7) => {
          b7.target === b7.currentTarget && (n14(), a15());
        }));
      });
    });
    e7.addEventListener(t15, "transitionend", (i11) => {
      i11.target === i11.currentTarget && (n14(), e7.dispose());
    });
  } else
    n14();
  return e7.dispose;
}
function F5(t15, { direction: r14, done: n14, classes: e7, inFlight: o17 }) {
  let m13 = o2(), s16 = n14 !== void 0 ? l14(n14) : () => {
  };
  r14 === "enter" && (t15.removeAttribute("hidden"), t15.style.display = "");
  let u16 = u2(r14, { enter: () => e7.enter, leave: () => e7.leave }), p8 = u2(r14, { enter: () => e7.enterTo, leave: () => e7.leaveTo }), a15 = u2(r14, { enter: () => e7.enterFrom, leave: () => e7.leaveFrom });
  return M6(t15, { prepare() {
    T10(t15, ...e7.base, ...e7.enter, ...e7.enterTo, ...e7.enterFrom, ...e7.leave, ...e7.leaveFrom, ...e7.leaveTo, ...e7.entered), v5(t15, ...e7.base, ...u16, ...a15);
  }, inFlight: o17 }), o17 && (o17.current = true), m13.nextFrame(() => {
    m13.add(L8(t15, () => (T10(t15, ...e7.base, ...u16), v5(t15, ...e7.base, ...e7.entered, ...p8), o17 && (o17.current = false), s16()))), T10(t15, ...e7.base, ...u16, ...a15), v5(t15, ...e7.base, ...u16, ...p8);
  }), m13.dispose;
}
function M6(t15, { inFlight: r14, prepare: n14 }) {
  if (r14 != null && r14.current) {
    n14();
    return;
  }
  let e7 = t15.style.transition;
  t15.style.transition = "none", n14(), t15.offsetHeight, t15.style.transition = e7;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function v6({ container: i11, direction: e7, classes: s16, onStart: o17, onStop: t15 }) {
  let a15 = f17(), r14 = p(), l15 = (0, import_react104.useRef)(false);
  n(() => {
    if (e7 === "idle" || !a15.current)
      return;
    o17.current(e7);
    let n14 = i11.current;
    return n14 ? r14.add(F5(n14, { direction: e7, classes: s16.current, inFlight: l15, done() {
      t15.current(e7);
    } })) : t15.current(e7), r14.dispose;
  }, [e7]);
}

// node_modules/@headlessui/react/dist/components/transition/transition.js
function y8(t15 = "") {
  return t15.split(/\s+/).filter((n14) => n14.length > 1);
}
function de4(t15) {
  var n14;
  return !!(t15.enter || t15.enterFrom || t15.enterTo || t15.leave || t15.leaveFrom || t15.leaveTo) || ((n14 = t15.as) != null ? n14 : me5) !== import_react105.Fragment || import_react105.default.Children.count(t15.children) === 1;
}
var W6 = (0, import_react105.createContext)(null);
W6.displayName = "TransitionContext";
var xe3 = ((r14) => (r14.Visible = "visible", r14.Hidden = "hidden", r14))(xe3 || {});
function Fe4() {
  let t15 = (0, import_react105.useContext)(W6);
  if (t15 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t15;
}
function _e3() {
  let t15 = (0, import_react105.useContext)(k3);
  if (t15 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t15;
}
var k3 = (0, import_react105.createContext)(null);
k3.displayName = "NestingContext";
function q6(t15) {
  return "children" in t15 ? q6(t15.children) : t15.current.filter(({ el: n14 }) => n14.current !== null).filter(({ state: n14 }) => n14 === "visible").length > 0;
}
function fe2(t15, n14) {
  let r14 = s3(t15), a15 = (0, import_react105.useRef)([]), H10 = f17(), L9 = p(), d15 = o4((i11, e7 = M.Hidden) => {
    let o17 = a15.current.findIndex(({ el: s16 }) => s16 === i11);
    o17 !== -1 && (u2(e7, { [M.Unmount]() {
      a15.current.splice(o17, 1);
    }, [M.Hidden]() {
      a15.current[o17].state = "hidden";
    } }), L9.microTask(() => {
      var s16;
      !q6(a15) && H10.current && ((s16 = r14.current) == null || s16.call(r14));
    }));
  }), F6 = o4((i11) => {
    let e7 = a15.current.find(({ el: o17 }) => o17 === i11);
    return e7 ? e7.state !== "visible" && (e7.state = "visible") : a15.current.push({ el: i11, state: "visible" }), () => d15(i11, M.Unmount);
  }), R8 = (0, import_react105.useRef)([]), f21 = (0, import_react105.useRef)(Promise.resolve()), C7 = (0, import_react105.useRef)({ enter: [], leave: [], idle: [] }), m13 = o4((i11, e7, o17) => {
    R8.current.splice(0), n14 && (n14.chains.current[e7] = n14.chains.current[e7].filter(([s16]) => s16 !== i11)), n14 == null || n14.chains.current[e7].push([i11, new Promise((s16) => {
      R8.current.push(s16);
    })]), n14 == null || n14.chains.current[e7].push([i11, new Promise((s16) => {
      Promise.all(C7.current[e7].map(([g7, c13]) => c13)).then(() => s16());
    })]), e7 === "enter" ? f21.current = f21.current.then(() => n14 == null ? void 0 : n14.wait.current).then(() => o17(e7)) : o17(e7);
  }), h7 = o4((i11, e7, o17) => {
    Promise.all(C7.current[e7].splice(0).map(([s16, g7]) => g7)).then(() => {
      var s16;
      (s16 = R8.current.shift()) == null || s16();
    }).then(() => o17(e7));
  });
  return (0, import_react105.useMemo)(() => ({ children: a15, register: F6, unregister: d15, onStart: m13, onStop: h7, wait: f21, chains: C7 }), [F6, d15, a15, m13, h7, C7, f21]);
}
var me5 = import_react105.Fragment;
var ce7 = O.RenderStrategy;
function De5(t15, n14) {
  var ne3, re2, ie2;
  let { beforeEnter: r14, afterEnter: a15, beforeLeave: H10, afterLeave: L9, enter: d15, enterFrom: F6, enterTo: R8, entered: f21, leave: C7, leaveFrom: m13, leaveTo: h7, ...i11 } = t15, e7 = (0, import_react105.useRef)(null), o17 = de4(t15), s16 = y(...o17 ? [e7, n14] : n14 === null ? [] : [n14]), g7 = (ne3 = i11.unmount) == null || ne3 ? M.Unmount : M.Hidden, { show: c13, appear: V5, initial: v7 } = Fe4(), [P7, J6] = (0, import_react105.useState)(c13 ? "visible" : "hidden"), $5 = _e3(), { register: w10, unregister: M7 } = $5;
  n(() => w10(e7), [w10, e7]), n(() => {
    if (g7 === M.Hidden && e7.current) {
      if (c13 && P7 !== "visible") {
        J6("visible");
        return;
      }
      return u2(P7, { ["hidden"]: () => M7(e7), ["visible"]: () => w10(e7) });
    }
  }, [P7, e7, w10, M7, c13, g7]);
  let _7 = s3({ base: y8(i11.className), enter: y8(d15), enterFrom: y8(F6), enterTo: y8(R8), entered: y8(f21), leave: y8(C7), leaveFrom: y8(m13), leaveTo: y8(h7) }), U6 = s3({ beforeEnter: r14, afterEnter: a15, beforeLeave: H10, afterLeave: L9 }), X3 = l9();
  n(() => {
    if (o17 && X3 && P7 === "visible" && e7.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [e7, P7, X3, o17]);
  let Ce5 = v7 && !V5, ee6 = V5 && c13 && v7, te4 = /* @__PURE__ */ (() => ee6 ? "enter" : !X3 || Ce5 ? "idle" : c13 ? "enter" : "leave")(), A6 = c12(0), he4 = o4((b7) => u2(b7, { enter: () => {
    var l15, u16;
    A6.addFlag(d9.Opening), (u16 = (l15 = U6.current).beforeEnter) == null || u16.call(l15);
  }, leave: () => {
    var l15, u16;
    A6.addFlag(d9.Closing), (u16 = (l15 = U6.current).beforeLeave) == null || u16.call(l15);
  }, idle: () => {
  } })), ge3 = o4((b7) => u2(b7, { enter: () => {
    var l15, u16;
    A6.removeFlag(d9.Opening), (u16 = (l15 = U6.current).afterEnter) == null || u16.call(l15);
  }, leave: () => {
    var l15, u16;
    A6.removeFlag(d9.Closing), (u16 = (l15 = U6.current).afterLeave) == null || u16.call(l15);
  }, idle: () => {
  } })), j11 = (0, import_react105.useRef)(false), G8 = fe2(() => {
    j11.current || (J6("hidden"), M7(e7));
  }, $5);
  v6({ container: e7, classes: _7, direction: te4, onStart: s3((b7) => {
    j11.current = true, G8.onStart(e7, b7, he4);
  }), onStop: s3((b7) => {
    j11.current = false, G8.onStop(e7, b7, ge3), b7 === "leave" && !q6(G8) && (J6("hidden"), M7(e7));
  }) });
  let p8 = i11, ve6 = { ref: s16 };
  return ee6 ? p8 = { ...p8, className: t3(i11.className, ..._7.current.enter, ..._7.current.enterFrom) } : j11.current ? (p8.className = t3(i11.className, (re2 = e7.current) == null ? void 0 : re2.className), p8.className === "" && delete p8.className) : (p8.className = t3(i11.className, (ie2 = e7.current) == null ? void 0 : ie2.className, ...u2(te4, { enter: [..._7.current.enterTo, ..._7.current.entered], leave: _7.current.leaveTo, idle: [] })), p8.className === "" && delete p8.className), import_react105.default.createElement(k3.Provider, { value: G8 }, import_react105.default.createElement(s8, { value: u2(P7, { ["visible"]: d9.Open, ["hidden"]: d9.Closed }) | A6.flags }, H({ ourProps: ve6, theirProps: p8, defaultTag: me5, features: ce7, visible: P7 === "visible", name: "Transition.Child" })));
}
function He5(t15, n14) {
  let { show: r14, appear: a15 = false, unmount: H10 = true, ...L9 } = t15, d15 = (0, import_react105.useRef)(null), F6 = de4(t15), R8 = y(...F6 ? [d15, n14] : n14 === null ? [] : [n14]);
  l9();
  let f21 = u12();
  if (r14 === void 0 && f21 !== null && (r14 = (f21 & d9.Open) === d9.Open), r14 === void 0)
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [C7, m13] = (0, import_react105.useState)(r14 ? "visible" : "hidden"), h7 = fe2(() => {
    r14 || m13("hidden");
  }), [i11, e7] = (0, import_react105.useState)(true), o17 = (0, import_react105.useRef)([r14]);
  n(() => {
    i11 !== false && o17.current[o17.current.length - 1] !== r14 && (o17.current.push(r14), e7(false));
  }, [o17, r14]);
  let s16 = (0, import_react105.useMemo)(() => ({ show: r14, appear: a15, initial: i11 }), [r14, a15, i11]);
  m6(d15, () => m13("hidden")), n(() => {
    r14 ? m13("visible") : !q6(h7) && d15.current !== null && m13("hidden");
  }, [r14, h7]);
  let g7 = { unmount: H10 }, c13 = o4(() => {
    var v7;
    i11 && e7(false), (v7 = t15.beforeEnter) == null || v7.call(t15);
  }), V5 = o4(() => {
    var v7;
    i11 && e7(false), (v7 = t15.beforeLeave) == null || v7.call(t15);
  });
  return import_react105.default.createElement(k3.Provider, { value: h7 }, import_react105.default.createElement(W6.Provider, { value: s16 }, H({ ourProps: { ...g7, as: import_react105.Fragment, children: import_react105.default.createElement(pe4, { ref: R8, ...g7, ...L9, beforeEnter: c13, beforeLeave: V5 }) }, theirProps: {}, defaultTag: import_react105.Fragment, features: ce7, visible: C7 === "visible", name: "Transition" })));
}
function Le4(t15, n14) {
  let r14 = (0, import_react105.useContext)(W6) !== null, a15 = u12() !== null;
  return import_react105.default.createElement(import_react105.default.Fragment, null, !r14 && a15 ? import_react105.default.createElement(Z6, { ref: n14, ...t15 }) : import_react105.default.createElement(pe4, { ref: n14, ...t15 }));
}
var Z6 = I(He5);
var pe4 = I(De5);
var Ae4 = I(Le4);
var Ke3 = Object.assign(Z6, { Child: Ae4, Root: Z6 });
export {
  h2 as Button,
  ve as Checkbox,
  y2 as CloseButton,
  Et as Combobox,
  Do as ComboboxButton,
  Vo as ComboboxInput,
  Lo as ComboboxLabel,
  Bo as ComboboxOption,
  wo as ComboboxOptions,
  C3 as DataInteractive,
  w3 as Description,
  _t as Dialog,
  At as DialogDescription,
  Ve2 as DialogPanel,
  qe as DialogTitle,
  we2 as Disclosure,
  be3 as DisclosureButton,
  Re3 as DisclosurePanel,
  H6 as Field,
  L5 as Fieldset,
  Le as FocusTrap,
  h5 as FocusTrapFeatures,
  J4 as Input,
  K as Label,
  d13 as Legend,
  Lo2 as Listbox,
  _t2 as ListboxButton,
  It as ListboxLabel,
  Ft as ListboxOption,
  Ct as ListboxOptions,
  Mt as ListboxSelectedOption,
  Kt as Menu,
  ot as MenuButton,
  lt as MenuHeading,
  it as MenuItem,
  at as MenuItems,
  st as MenuSection,
  ut as MenuSeparator,
  qt as Popover,
  vt2 as PopoverButton,
  yt2 as PopoverGroup,
  Tt2 as PopoverOverlay,
  mt2 as PopoverPanel,
  te as Portal,
  Ne3 as Radio,
  ut3 as RadioGroup,
  Be4 as RadioGroupDescription,
  We3 as RadioGroupLabel,
  we4 as RadioGroupOption,
  $4 as Select,
  je3 as Switch,
  ve4 as SwitchDescription,
  ge2 as SwitchGroup,
  De3 as SwitchLabel,
  st3 as Tab,
  Oe as TabGroup,
  Ne4 as TabList,
  Be5 as TabPanel,
  ke4 as TabPanels,
  w9 as Textarea,
  Ke3 as Transition,
  Ae4 as TransitionChild,
  l4 as useClose
};
/*! Bundled license information:

tabbable/dist/index.esm.js:
  (*!
  * tabbable 6.2.0
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)
*/
//# sourceMappingURL=@headlessui_react.js.map
