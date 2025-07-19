"use strict";
(function(root, module) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], function(exports)  {
            module(root, exports);
        });
    } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeName !== 'string') {
        module(global, exports);
    } else {
        module(root, root);
    }
}(typeof self !== 'undefined' ? self : this, function($rt_globals, $rt_exports) {
    var $rt_seed = 2463534242;
    function $rt_nextId() {
        var x = $rt_seed;
        x ^= x << 13;
        x ^= x >>> 17;
        x ^= x << 5;
        $rt_seed = x;
        return x;
    }
    function $rt_compare(a, b) {
        return a > b ? 1 : a < b ?  -1 : a === b ? 0 : 1;
    }
    function $rt_isInstance(obj, cls) {
        return obj instanceof $rt_objcls() && !!obj.constructor.$meta && $rt_isAssignable(obj.constructor, cls);
    }
    function $rt_isAssignable(from, to) {
        if (from === to) {
            return true;
        }
        if (to.$meta.item !== null) {
            return from.$meta.item !== null && $rt_isAssignable(from.$meta.item, to.$meta.item);
        }
        var supertypes = from.$meta.supertypes;
        for (var i = 0;i < supertypes.length;i = i + 1 | 0) {
            if ($rt_isAssignable(supertypes[i], to)) {
                return true;
            }
        }
        return false;
    }
    function $rt_castToInterface(obj, cls) {
        if (obj !== null && !$rt_isInstance(obj, cls)) {
            $rt_throwCCE();
        }
        return obj;
    }
    function $rt_castToClass(obj, cls) {
        if (obj !== null && !(obj instanceof cls)) {
            $rt_throwCCE();
        }
        return obj;
    }
    $rt_globals.Array.prototype.fill = $rt_globals.Array.prototype.fill || function(value, start, end) {
        var len = this.length;
        if (!len) return this;
        start = start | 0;
        var i = start < 0 ? $rt_globals.Math.max(len + start, 0) : $rt_globals.Math.min(start, len);
        end = end === $rt_globals.undefined ? len : end | 0;
        end = end < 0 ? $rt_globals.Math.max(len + end, 0) : $rt_globals.Math.min(end, len);
        for (;i < end;i++) {
            this[i] = value;
        }
        return this;
    };
    function $rt_createArray(cls, sz) {
        var data = new $rt_globals.Array(sz);
        data.fill(null);
        return new $rt_array(cls, data);
    }
    function $rt_createArrayFromData(cls, init) {
        return $rt_wrapArray(cls, init);
    }
    function $rt_wrapArray(cls, data) {
        return new $rt_array(cls, data);
    }
    function $rt_createUnfilledArray(cls, sz) {
        return new $rt_array(cls, new $rt_globals.Array(sz));
    }
    function $rt_createNumericArray(cls, nativeArray) {
        return new $rt_array(cls, nativeArray);
    }
    var $rt_createLongArray;
    var $rt_createLongArrayFromData;
    if (typeof $rt_globals.BigInt64Array !== 'function') {
        $rt_createLongArray = function(sz) {
            var data = new $rt_globals.Array(sz);
            var arr = new $rt_array($rt_longcls(), data);
            data.fill(Long_ZERO);
            return arr;
        };
        $rt_createLongArrayFromData = function(init) {
            return new $rt_array($rt_longcls(), init);
        };
    } else {
        $rt_createLongArray = function(sz) {
            return $rt_createNumericArray($rt_longcls(), new $rt_globals.BigInt64Array(sz));
        };
        $rt_createLongArrayFromData = function(data) {
            var buffer = new $rt_globals.BigInt64Array(data.length);
            buffer.set(data);
            return $rt_createNumericArray($rt_longcls(), buffer);
        };
    }
    function $rt_createCharArray(sz) {
        return $rt_createNumericArray($rt_charcls(), new $rt_globals.Uint16Array(sz));
    }
    function $rt_createCharArrayFromData(data) {
        var buffer = new $rt_globals.Uint16Array(data.length);
        buffer.set(data);
        return $rt_createNumericArray($rt_charcls(), buffer);
    }
    function $rt_createByteArray(sz) {
        return $rt_createNumericArray($rt_bytecls(), new $rt_globals.Int8Array(sz));
    }
    function $rt_createByteArrayFromData(data) {
        var buffer = new $rt_globals.Int8Array(data.length);
        buffer.set(data);
        return $rt_createNumericArray($rt_bytecls(), buffer);
    }
    function $rt_createShortArray(sz) {
        return $rt_createNumericArray($rt_shortcls(), new $rt_globals.Int16Array(sz));
    }
    function $rt_createShortArrayFromData(data) {
        var buffer = new $rt_globals.Int16Array(data.length);
        buffer.set(data);
        return $rt_createNumericArray($rt_shortcls(), buffer);
    }
    function $rt_createIntArray(sz) {
        return $rt_createNumericArray($rt_intcls(), new $rt_globals.Int32Array(sz));
    }
    function $rt_createIntArrayFromData(data) {
        var buffer = new $rt_globals.Int32Array(data.length);
        buffer.set(data);
        return $rt_createNumericArray($rt_intcls(), buffer);
    }
    function $rt_createBooleanArray(sz) {
        return $rt_createNumericArray($rt_booleancls(), new $rt_globals.Int8Array(sz));
    }
    function $rt_createBooleanArrayFromData(data) {
        var buffer = new $rt_globals.Int8Array(data.length);
        buffer.set(data);
        return $rt_createNumericArray($rt_booleancls(), buffer);
    }
    function $rt_createFloatArray(sz) {
        return $rt_createNumericArray($rt_floatcls(), new $rt_globals.Float32Array(sz));
    }
    function $rt_createFloatArrayFromData(data) {
        var buffer = new $rt_globals.Float32Array(data.length);
        buffer.set(data);
        return $rt_createNumericArray($rt_floatcls(), buffer);
    }
    function $rt_createDoubleArray(sz) {
        return $rt_createNumericArray($rt_doublecls(), new $rt_globals.Float64Array(sz));
    }
    function $rt_createDoubleArrayFromData(data) {
        var buffer = new $rt_globals.Float64Array(data.length);
        buffer.set(data);
        return $rt_createNumericArray($rt_doublecls(), buffer);
    }
    function $rt_arraycls(cls) {
        var result = cls.$array;
        if (result === null) {
            var arraycls = {  };
            var name = "[" + cls.$meta.binaryName;
            arraycls.$meta = { item : cls, supertypes : [$rt_objcls()], primitive : false, superclass : $rt_objcls(), name : name, binaryName : name, enum : false, simpleName : null, declaringClass : null, enclosingClass : null };
            arraycls.classObject = null;
            arraycls.$array = null;
            result = arraycls;
            cls.$array = arraycls;
        }
        return result;
    }
    function $rt_createcls() {
        return { $array : null, classObject : null, $meta : { supertypes : [], superclass : null } };
    }
    function $rt_createPrimitiveCls(name, binaryName) {
        var cls = $rt_createcls();
        cls.$meta.primitive = true;
        cls.$meta.name = name;
        cls.$meta.binaryName = binaryName;
        cls.$meta.enum = false;
        cls.$meta.item = null;
        cls.$meta.simpleName = null;
        cls.$meta.declaringClass = null;
        cls.$meta.enclosingClass = null;
        return cls;
    }
    var $rt_booleanclsCache = null;
    function $rt_booleancls() {
        if ($rt_booleanclsCache === null) {
            $rt_booleanclsCache = $rt_createPrimitiveCls("boolean", "Z");
        }
        return $rt_booleanclsCache;
    }
    var $rt_charclsCache = null;
    function $rt_charcls() {
        if ($rt_charclsCache === null) {
            $rt_charclsCache = $rt_createPrimitiveCls("char", "C");
        }
        return $rt_charclsCache;
    }
    var $rt_byteclsCache = null;
    function $rt_bytecls() {
        if ($rt_byteclsCache === null) {
            $rt_byteclsCache = $rt_createPrimitiveCls("byte", "B");
        }
        return $rt_byteclsCache;
    }
    var $rt_shortclsCache = null;
    function $rt_shortcls() {
        if ($rt_shortclsCache === null) {
            $rt_shortclsCache = $rt_createPrimitiveCls("short", "S");
        }
        return $rt_shortclsCache;
    }
    var $rt_intclsCache = null;
    function $rt_intcls() {
        if ($rt_intclsCache === null) {
            $rt_intclsCache = $rt_createPrimitiveCls("int", "I");
        }
        return $rt_intclsCache;
    }
    var $rt_longclsCache = null;
    function $rt_longcls() {
        if ($rt_longclsCache === null) {
            $rt_longclsCache = $rt_createPrimitiveCls("long", "J");
        }
        return $rt_longclsCache;
    }
    var $rt_floatclsCache = null;
    function $rt_floatcls() {
        if ($rt_floatclsCache === null) {
            $rt_floatclsCache = $rt_createPrimitiveCls("float", "F");
        }
        return $rt_floatclsCache;
    }
    var $rt_doubleclsCache = null;
    function $rt_doublecls() {
        if ($rt_doubleclsCache === null) {
            $rt_doubleclsCache = $rt_createPrimitiveCls("double", "D");
        }
        return $rt_doubleclsCache;
    }
    var $rt_voidclsCache = null;
    function $rt_voidcls() {
        if ($rt_voidclsCache === null) {
            $rt_voidclsCache = $rt_createPrimitiveCls("void", "V");
        }
        return $rt_voidclsCache;
    }
    function $rt_throw(ex) {
        throw $rt_exception(ex);
    }
    var $rt_javaExceptionProp = $rt_globals.Symbol("javaException");
    function $rt_exception(ex) {
        var err = ex.$jsException;
        if (!err) {
            var javaCause = $rt_throwableCause(ex);
            var jsCause = javaCause !== null ? javaCause.$jsException : $rt_globals.undefined;
            var cause = typeof jsCause === "object" ? { cause : jsCause } : $rt_globals.undefined;
            err = new JavaError("Java exception thrown", cause);
            if (typeof $rt_globals.Error.captureStackTrace === "function") {
                $rt_globals.Error.captureStackTrace(err);
            }
            err[$rt_javaExceptionProp] = ex;
            ex.$jsException = err;
            $rt_fillStack(err, ex);
        }
        return err;
    }
    function $rt_fillStack(err, ex) {
        if (typeof $rt_decodeStack === "function" && err.stack) {
            var stack = $rt_decodeStack(err.stack);
            var javaStack = $rt_createArray($rt_stecls(), stack.length);
            var elem;
            var noStack = false;
            for (var i = 0;i < stack.length;++i) {
                var element = stack[i];
                elem = $rt_createStackElement($rt_str(element.className), $rt_str(element.methodName), $rt_str(element.fileName), element.lineNumber);
                if (elem == null) {
                    noStack = true;
                    break;
                }
                javaStack.data[i] = elem;
            }
            if (!noStack) {
                $rt_setStack(ex, javaStack);
            }
        }
    }
    function $rt_createMultiArray(cls, dimensions) {
        var first = 0;
        for (var i = dimensions.length - 1;i >= 0;i = i - 1 | 0) {
            if (dimensions[i] === 0) {
                first = i;
                break;
            }
        }
        if (first > 0) {
            for (i = 0;i < first;i = i + 1 | 0) {
                cls = $rt_arraycls(cls);
            }
            if (first === dimensions.length - 1) {
                return $rt_createArray(cls, dimensions[first]);
            }
        }
        var arrays = new $rt_globals.Array($rt_primitiveArrayCount(dimensions, first));
        var firstDim = dimensions[first] | 0;
        for (i = 0;i < arrays.length;i = i + 1 | 0) {
            arrays[i] = $rt_createArray(cls, firstDim);
        }
        return $rt_createMultiArrayImpl(cls, arrays, dimensions, first);
    }
    function $rt_createByteMultiArray(dimensions) {
        var arrays = new $rt_globals.Array($rt_primitiveArrayCount(dimensions, 0));
        if (arrays.length === 0) {
            return $rt_createMultiArray($rt_bytecls(), dimensions);
        }
        var firstDim = dimensions[0] | 0;
        for (var i = 0;i < arrays.length;i = i + 1 | 0) {
            arrays[i] = $rt_createByteArray(firstDim);
        }
        return $rt_createMultiArrayImpl($rt_bytecls(), arrays, dimensions);
    }
    function $rt_createCharMultiArray(dimensions) {
        var arrays = new $rt_globals.Array($rt_primitiveArrayCount(dimensions, 0));
        if (arrays.length === 0) {
            return $rt_createMultiArray($rt_charcls(), dimensions);
        }
        var firstDim = dimensions[0] | 0;
        for (var i = 0;i < arrays.length;i = i + 1 | 0) {
            arrays[i] = $rt_createCharArray(firstDim);
        }
        return $rt_createMultiArrayImpl($rt_charcls(), arrays, dimensions, 0);
    }
    function $rt_createBooleanMultiArray(dimensions) {
        var arrays = new $rt_globals.Array($rt_primitiveArrayCount(dimensions, 0));
        if (arrays.length === 0) {
            return $rt_createMultiArray($rt_booleancls(), dimensions);
        }
        var firstDim = dimensions[0] | 0;
        for (var i = 0;i < arrays.length;i = i + 1 | 0) {
            arrays[i] = $rt_createBooleanArray(firstDim);
        }
        return $rt_createMultiArrayImpl($rt_booleancls(), arrays, dimensions, 0);
    }
    function $rt_createShortMultiArray(dimensions) {
        var arrays = new $rt_globals.Array($rt_primitiveArrayCount(dimensions, 0));
        if (arrays.length === 0) {
            return $rt_createMultiArray($rt_shortcls(), dimensions);
        }
        var firstDim = dimensions[0] | 0;
        for (var i = 0;i < arrays.length;i = i + 1 | 0) {
            arrays[i] = $rt_createShortArray(firstDim);
        }
        return $rt_createMultiArrayImpl($rt_shortcls(), arrays, dimensions, 0);
    }
    function $rt_createIntMultiArray(dimensions) {
        var arrays = new $rt_globals.Array($rt_primitiveArrayCount(dimensions, 0));
        if (arrays.length === 0) {
            return $rt_createMultiArray($rt_intcls(), dimensions);
        }
        var firstDim = dimensions[0] | 0;
        for (var i = 0;i < arrays.length;i = i + 1 | 0) {
            arrays[i] = $rt_createIntArray(firstDim);
        }
        return $rt_createMultiArrayImpl($rt_intcls(), arrays, dimensions, 0);
    }
    function $rt_createLongMultiArray(dimensions) {
        var arrays = new $rt_globals.Array($rt_primitiveArrayCount(dimensions, 0));
        if (arrays.length === 0) {
            return $rt_createMultiArray($rt_longcls(), dimensions);
        }
        var firstDim = dimensions[0] | 0;
        for (var i = 0;i < arrays.length;i = i + 1 | 0) {
            arrays[i] = $rt_createLongArray(firstDim);
        }
        return $rt_createMultiArrayImpl($rt_longcls(), arrays, dimensions, 0);
    }
    function $rt_createFloatMultiArray(dimensions) {
        var arrays = new $rt_globals.Array($rt_primitiveArrayCount(dimensions, 0));
        if (arrays.length === 0) {
            return $rt_createMultiArray($rt_floatcls(), dimensions);
        }
        var firstDim = dimensions[0] | 0;
        for (var i = 0;i < arrays.length;i = i + 1 | 0) {
            arrays[i] = $rt_createFloatArray(firstDim);
        }
        return $rt_createMultiArrayImpl($rt_floatcls(), arrays, dimensions, 0);
    }
    function $rt_createDoubleMultiArray(dimensions) {
        var arrays = new $rt_globals.Array($rt_primitiveArrayCount(dimensions, 0));
        if (arrays.length === 0) {
            return $rt_createMultiArray($rt_doublecls(), dimensions);
        }
        var firstDim = dimensions[0] | 0;
        for (var i = 0;i < arrays.length;i = i + 1 | 0) {
            arrays[i] = $rt_createDoubleArray(firstDim);
        }
        return $rt_createMultiArrayImpl($rt_doublecls(), arrays, dimensions, 0);
    }
    function $rt_primitiveArrayCount(dimensions, start) {
        var val = dimensions[start + 1] | 0;
        for (var i = start + 2;i < dimensions.length;i = i + 1 | 0) {
            val = val * (dimensions[i] | 0) | 0;
            if (val === 0) {
                break;
            }
        }
        return val;
    }
    function $rt_createMultiArrayImpl(cls, arrays, dimensions, start) {
        var limit = arrays.length;
        for (var i = start + 1 | 0;i < dimensions.length;i = i + 1 | 0) {
            cls = $rt_arraycls(cls);
            var dim = dimensions[i];
            var index = 0;
            var packedIndex = 0;
            while (index < limit) {
                var arr = $rt_createUnfilledArray(cls, dim);
                for (var j = 0;j < dim;j = j + 1 | 0) {
                    arr.data[j] = arrays[index];
                    index = index + 1 | 0;
                }
                arrays[packedIndex] = arr;
                packedIndex = packedIndex + 1 | 0;
            }
            limit = packedIndex;
        }
        return arrays[0];
    }
    function $rt_assertNotNaN(value) {
        if (typeof value === 'number' && $rt_globals.isNaN(value)) {
            throw "NaN";
        }
        return value;
    }
    function $rt_createOutputFunction(printFunction) {
        var buffer = "";
        var utf8Buffer = 0;
        var utf8Remaining = 0;
        function putCodePoint(ch) {
            if (ch === 0xA) {
                printFunction(buffer);
                buffer = "";
            } else if (ch < 0x10000) {
                buffer += $rt_globals.String.fromCharCode(ch);
            } else {
                ch = ch - 0x10000 | 0;
                var hi = (ch >> 10) + 0xD800;
                var lo = (ch & 0x3FF) + 0xDC00;
                buffer += $rt_globals.String.fromCharCode(hi, lo);
            }
        }
        return function(ch) {
            if ((ch & 0x80) === 0) {
                putCodePoint(ch);
            } else if ((ch & 0xC0) === 0x80) {
                if (utf8Buffer > 0) {
                    utf8Remaining <<= 6;
                    utf8Remaining |= ch & 0x3F;
                    if ( --utf8Buffer === 0) {
                        putCodePoint(utf8Remaining);
                    }
                }
            } else if ((ch & 0xE0) === 0xC0) {
                utf8Remaining = ch & 0x1F;
                utf8Buffer = 1;
            } else if ((ch & 0xF0) === 0xE0) {
                utf8Remaining = ch & 0x0F;
                utf8Buffer = 2;
            } else if ((ch & 0xF8) === 0xF0) {
                utf8Remaining = ch & 0x07;
                utf8Buffer = 3;
            }
        };
    }
    var $rt_putStdout = typeof $rt_putStdoutCustom === "function" ? $rt_putStdoutCustom : typeof $rt_globals.console === "object" ? $rt_createOutputFunction(function(msg) {
        $rt_globals.console.info(msg);
    }) : function() {
    };
    var $rt_putStderr = typeof $rt_putStderrCustom === "function" ? $rt_putStderrCustom : typeof $rt_globals.console === "object" ? $rt_createOutputFunction(function(msg) {
        $rt_globals.console.error(msg);
    }) : function() {
    };
    var $rt_packageData = null;
    function $rt_packages(data) {
        var i = 0;
        var packages = new $rt_globals.Array(data.length);
        for (var j = 0;j < data.length;++j) {
            var prefixIndex = data[i++];
            var prefix = prefixIndex >= 0 ? packages[prefixIndex] : "";
            packages[j] = prefix + data[i++] + ".";
        }
        $rt_packageData = packages;
    }
    function $rt_metadata(data) {
        var packages = $rt_packageData;
        var i = 0;
        while (i < data.length) {
            var cls = data[i++];
            cls.$meta = {  };
            var m = cls.$meta;
            var className = data[i++];
            m.name = className !== 0 ? className : null;
            if (m.name !== null) {
                var packageIndex = data[i++];
                if (packageIndex >= 0) {
                    m.name = packages[packageIndex] + m.name;
                }
            }
            m.binaryName = "L" + m.name + ";";
            var superclass = data[i++];
            m.superclass = superclass !== 0 ? superclass : null;
            m.supertypes = data[i++];
            if (m.superclass) {
                cls.prototype = $rt_globals.Object.create(m.superclass.prototype);
            } else {
                cls.prototype = {  };
            }
            cls.prototype.constructor = cls;
            cls.classObject = null;
            m.accessLevel = data[i++];
            var innerClassInfo = data[i++];
            if (innerClassInfo === 0) {
                m.simpleName = null;
                m.declaringClass = null;
                m.enclosingClass = null;
            } else {
                var enclosingClass = innerClassInfo[0];
                m.enclosingClass = enclosingClass !== 0 ? enclosingClass : null;
                var declaringClass = innerClassInfo[1];
                m.declaringClass = declaringClass !== 0 ? declaringClass : null;
                var simpleName = innerClassInfo[2];
                m.simpleName = simpleName !== 0 ? simpleName : null;
            }
            var clinit = data[i++];
            cls.$clinit = clinit !== 0 ? clinit : function() {
            };
            var virtualMethods = data[i++];
            if (virtualMethods !== 0) {
                for (var j = 0;j < virtualMethods.length;j += 2) {
                    var name = virtualMethods[j];
                    var func = virtualMethods[j + 1];
                    if (typeof name === 'string') {
                        name = [name];
                    }
                    for (var k = 0;k < name.length;++k) {
                        cls.prototype[name[k]] = func;
                    }
                }
            }
            cls.$array = null;
        }
    }
    function $rt_wrapFunction0(f) {
        return function() {
            return f(this);
        };
    }
    function $rt_wrapFunction1(f) {
        return function(p1) {
            return f(this, p1);
        };
    }
    function $rt_wrapFunction2(f) {
        return function(p1, p2) {
            return f(this, p1, p2);
        };
    }
    function $rt_wrapFunction3(f) {
        return function(p1, p2, p3) {
            return f(this, p1, p2, p3, p3);
        };
    }
    function $rt_wrapFunction4(f) {
        return function(p1, p2, p3, p4) {
            return f(this, p1, p2, p3, p4);
        };
    }
    function $rt_threadStarter(f) {
        return function() {
            var args = $rt_globals.Array.prototype.slice.apply(arguments);
            $rt_startThread(function() {
                f.apply(this, args);
            });
        };
    }
    function $rt_mainStarter(f) {
        return function(args, callback) {
            if (!args) {
                args = [];
            }
            var javaArgs = $rt_createArray($rt_objcls(), args.length);
            for (var i = 0;i < args.length;++i) {
                javaArgs.data[i] = $rt_str(args[i]);
            }
            $rt_startThread(function() {
                f.call(null, javaArgs);
            }, callback);
        };
    }
    var $rt_stringPool_instance;
    function $rt_stringPool(strings) {
        $rt_stringPool_instance = new $rt_globals.Array(strings.length);
        for (var i = 0;i < strings.length;++i) {
            $rt_stringPool_instance[i] = $rt_intern($rt_str(strings[i]));
        }
    }
    function $rt_s(index) {
        return $rt_stringPool_instance[index];
    }
    function $rt_eraseClinit(target) {
        return target.$clinit = function() {
        };
    }
    var $rt_numberConversionBuffer = new $rt_globals.ArrayBuffer(16);
    var $rt_numberConversionView = new $rt_globals.DataView($rt_numberConversionBuffer);
    var $rt_numberConversionFloatArray = new $rt_globals.Float32Array($rt_numberConversionBuffer);
    var $rt_numberConversionDoubleArray = new $rt_globals.Float64Array($rt_numberConversionBuffer);
    var $rt_numberConversionIntArray = new $rt_globals.Int32Array($rt_numberConversionBuffer);
    var $rt_doubleToRawLongBits;
    var $rt_longBitsToDouble;
    if (typeof $rt_globals.BigInt !== 'function') {
        $rt_doubleToRawLongBits = function(n) {
            $rt_numberConversionView.setFloat64(0, n, true);
            return new Long($rt_numberConversionView.getInt32(0, true), $rt_numberConversionView.getInt32(4, true));
        };
        $rt_longBitsToDouble = function(n) {
            $rt_numberConversionView.setInt32(0, n.lo, true);
            $rt_numberConversionView.setInt32(4, n.hi, true);
            return $rt_numberConversionView.getFloat64(0, true);
        };
    } else if (typeof $rt_globals.BigInt64Array !== 'function') {
        $rt_doubleToRawLongBits = function(n) {
            $rt_numberConversionView.setFloat64(0, n, true);
            var lo = $rt_numberConversionView.getInt32(0, true);
            var hi = $rt_numberConversionView.getInt32(4, true);
            return $rt_globals.BigInt.asIntN(64, $rt_globals.BigInt.asUintN(32, $rt_globals.BigInt(lo)) | $rt_globals.BigInt(hi) << $rt_globals.BigInt(32));
        };
        $rt_longBitsToDouble = function(n) {
            $rt_numberConversionView.setFloat64(0, n, true);
            var lo = $rt_numberConversionView.getInt32(0, true);
            var hi = $rt_numberConversionView.getInt32(4, true);
            return $rt_globals.BigInt.asIntN(64, $rt_globals.BigInt.asUintN(32, $rt_globals.BigInt(lo)) | $rt_globals.BigInt(hi) << $rt_globals.BigInt(32));
        };
    } else {
        var $rt_numberConversionLongArray = new $rt_globals.BigInt64Array($rt_numberConversionBuffer);
        $rt_doubleToRawLongBits = function(n) {
            $rt_numberConversionDoubleArray[0] = n;
            return $rt_numberConversionLongArray[0];
        };
        $rt_longBitsToDouble = function(n) {
            $rt_numberConversionLongArray[0] = n;
            return $rt_numberConversionDoubleArray[0];
        };
    }
    function $rt_floatToRawIntBits(n) {
        $rt_numberConversionFloatArray[0] = n;
        return $rt_numberConversionIntArray[0];
    }
    function $rt_intBitsToFloat(n) {
        $rt_numberConversionIntArray[0] = n;
        return $rt_numberConversionFloatArray[0];
    }
    function $rt_equalDoubles(a, b) {
        if (a !== a) {
            return b !== b;
        }
        $rt_numberConversionDoubleArray[0] = a;
        $rt_numberConversionDoubleArray[1] = b;
        return $rt_numberConversionIntArray[0] === $rt_numberConversionIntArray[2] && $rt_numberConversionIntArray[1] === $rt_numberConversionIntArray[3];
    }
    function $rt_equalFloats(a, b) {
        if (a !== a) {
            return b !== b;
        }
        $rt_numberConversionFloatArray[0] = a;
        $rt_numberConversionFloatArray[1] = b;
        return $rt_numberConversionIntArray[0] === $rt_numberConversionIntArray[1];
    }
    function $rt_javaException(err) {
        return err[$rt_javaExceptionProp];
    }
    function $rt_typeof(obj) {
        if (obj === null) {
            return $rt_objcls();
        }
        var cls = obj.constructor;
        if (cls === $rt_array) {
            return obj.$cls;
        }
        return cls;
    }
    function $rt_isJsObject(obj) {
        return obj !== null && !(obj instanceof $rt_objcls());
    }
    function $rt_isJsFunction(obj) {
        return obj !== null && typeof obj === "function" && !obj.$is  "class";
    }
    var $rt_lastThreadId = 0;
    var $rt_lastUncaughtExceptionHandler = null;
    function $rt_setUncaughtExceptionHandler(handler) {
        $rt_lastUncaughtExceptionHandler = handler;
    }
    function $rt_reportUncaughtException(e) {
        if ($rt_lastUncaughtExceptionHandler !== null) {
            try {
                $rt_lastUncaughtExceptionHandler.uncaughtException(jl_Thread_currentThread(), e);
            } catch (e) {
                $rt_globals.console.error("Exception in uncaught exception handler", e);
            }
        }
        var err = $rt_exception(e);
        if (err.stack) {
            $rt_globals.console.error("Uncaught exception: " + err.stack);
        } else {
            $rt_globals.console.error("Uncaught exception: " + err);
        }
    }
    function $rt_checkNotNull(obj) {
        if (obj === null) {
            $rt_throwNPE();
        }
        return obj;
    }
    function $rt_checkArrayBounds(len, index) {
        if (index < 0 || index >= len) {
            $rt_throwAIOOBE();
        }
        return index;
    }
    var $rt_resuming = function() {
        return false;
    };
    var $rt_suspending = function() {
        return false;
    };
    var $rt_suspend = function() {
        return false;
    };
    var $rt_exception = function(ex) {
        return ex;
    };
    var $rt_int = function(n) {
        return n | 0;
    };
    var $rt_throwNPE = function() {
        throw new Error("NullPointerException");
    };
    function $rt_cls(cls) {
        var result = cls.classObject;
        if (result === null) {
            result = new jl_Class();
            result.$data = cls;
            cls.classObject = result;
        }
        return result;
    }
    function $rt_init(cls) {
        cls.$clinit();
    }
    function $rt_instanceof(obj, cls) {
        if (obj === null) {
            return false;
        }
        if (typeof cls === "function") {
            return obj instanceof cls;
        }
        return $rt_isInstance(obj, cls);
    }
    var $rt_isMonomorphic = true;
    var $rt_isPolymorphic = false;
    var $rt_has  "jso" = typeof $rt_jso_marker !== "undefined";
    var $rt_exceptionTemp;
    if (typeof $rt_installStackTraces === "function") {
        $rt_installStackTraces(
            function(e) {
                return e[$rt_javaExceptionProp];
            },
            function(e, stack) {
                return $rt_setStack(e, stack);
            },
            function(e) {
                return $rt_throwableCause(e);
            }
        );
    }
    function $rt_bind(rthis, rmethod) {
        return function() {
            return rmethod.apply(rthis, arguments);
        };
    }
    function $rt_iterator(object) {
        return object.iterator();
    }
    function $rt_enumConstants(cls) {
        return cls.$values;
    }
    function $rt_nullableEnumConstants(cls) {
        return cls.$values_nullable;
    }
    function $rt_nullcheck(x) {
        return x;
    }
    function $rt_byte(x) {
        return x & 0xFF;
    }
    function $rt_char(x) {
        return x & 0xFFFF;
    }
    function $rt_short(x) {
        return x & 0xFFFF;
    }
    function $rt_throwArrayCastException() {
        throw new jl_ClassCastException();
    }
    function $rt_castArray(array, cls) {
        if ($rt_instanceof(array, cls)) {
            return array;
        }
        throw $rt_throwArrayCastException();
    }
    function $rt_checkArrayType(array, cls) {
        if (array.$cls.$meta.item === cls) {
            return;
        }
        throw $rt_throwArrayCastException();
    }
    function $rt_arrayBaseOffset(cls) {
        return 0;
    }
    function $rt_arrayIndexScale(cls) {
        return 1;
    }
    function $rt_arrayGet(array, index) {
        return array.data[index];
    }
    function $rt_arraySet(array, index, value) {
        array.data[index] = value;
    }
    function $rt_arraycopy(src, srcOfs, dest, destOfs, len) {
        var srcData = src.data;
        var destData = dest.data;
        if (srcData === destData && srcOfs < destOfs) {
            for (var i = len - 1;i >= 0;--i) {
                destData[destOfs + i] = srcData[srcOfs + i];
            }
        } else {
            for (var i = 0;i < len;++i) {
                destData[destOfs + i] = srcData[srcOfs + i];
            }
        }
    }
    function $rt_string_init(chars, offset, count) {
        if (offset === 0 && count === chars.data.length) {
            return $rt_str(String.fromCharCode.apply(null, chars.data));
        }
        return $rt_str(String.fromCharCode.apply(null, chars.data.slice(offset, offset + count)));
    }
    function $rt_string_initArray(chars) {
        return $rt_str(String.fromCharCode.apply(null, chars.data));
    }
    function $rt_string_toCharArray(str) {
        var result = $rt_createCharArray(str.length);
        for (var i = 0;i < str.length;++i) {
            result.data[i] = str.charCodeAt(i);
        }
        return result;
    }
    function $rt_string_getBytes(str) {
        var result = $rt_createByteArray(str.length);
        for (var i = 0;i < str.length;++i) {
            result.data[i] = str.charCodeAt(i);
        }
        return result;
    }
    var $rt_string_split = function(str, regex) {
        return str.split(regex);
    };
    function $rt_jso_field(jso, name) {
        if (name === null) {
            return $rt_throwNPE();
        }
        return jso[name.$str];
    }
    function $rt_jso_setField(jso, name, value) {
        if (name === null) {
            return $rt_throwNPE();
        }
        jso[name.$str] = value;
    }
    function $rt_jso_method(jso, name) {
        if (name === null) {
            return $rt_throwNPE();
        }
        var m = jso[name.$str];
        if (typeof m !== "function") {
            $rt_throwNPE();
        }
        return $rt_bind(jso, m);
    }
    function $rt_jso_invoke(jso, name, args) {
        if (name === null) {
            return $rt_throwNPE();
        }
        var m = jso[name.$str];
        if (typeof m !== "function") {
            $rt_throwNPE();
        }
        return m.apply(jso, args);
    }
    function $rt_jso_global(name) {
        if (name === null) {
            return $rt_throwNPE();
        }
        return $rt_globals[name.$str];
    }
    function $rt_jso_setGlobal(name, value) {
        if (name === null) {
            return $rt_throwNPE();
        }
        $rt_globals[name.$str] = value;
    }
    function $rt_jso_globalMethod(name) {
        if (name === null) {
            return $rt_throwNPE();
        }
        var m = $rt_globals[name.$str];
        if (typeof m !== "function") {
            $rt_throwNPE();
        }
        return $rt_bind($rt_globals, m);
    }
    function $rt_jso_invokeGlobal(name, args) {
        if (name === null) {
            return $rt_throwNPE();
        }
        var m = $rt_globals[name.$str];
        if (typeof m !== "function") {
            $rt_throwNPE();
        }
        return m.apply($rt_globals, args);
    }
    function $rt_jso_array(arr) {
        return arr;
    }
    function $rt_jso_arrayGet(arr, index) {
        return arr[index];
    }
    function $rt_jso_arraySet(arr, index, value) {
        arr[index] = value;
    }
    function $rt_jso_arrayLength(arr) {
        return arr.length;
    }
    function $rt_jso_jsonParse(str) {
        if (str === null) {
            return null;
        }
        try {
            return JSON.parse(str.$str);
        } catch (e) {
            $rt_throw(jl_IllegalStateException__init_1($rt_str("Can't parse JSON: " + e.message)));
        }
    }
    function $rt_jso_jsonStringify(obj) {
        try {
            return $rt_str(JSON.stringify(obj));
        } catch (e) {
            $rt_throw(jl_IllegalStateException__init_1($rt_str("Can't stringify JSON: " + e.message)));
        }
    }
    function $rt_now() {
        return $rt_globals.Date.now();
    }
    function $rt_compareBytes(a, b) {
        return a - b;
    }
    function $rt_compareChars(a, b) {
        return a - b;
    }
    function $rt_compareShorts(a, b) {
        return a - b;
    }
    function $rt_compareInts(a, b) {
        return a - b;
    }
    function $rt_compareLongs(a, b) {
        return $rt_globals.Number(a - b);
    }
    function $rt_compareFloats(a, b) {
        var r = a - b;
        if (r === 0) {
            if (a === 0 && b === 0) {
                return 0;
            }
            if (a > 0) {
                return 1;
            }
            return -1;
        }
        return r;
    }
    function $rt_compareDoubles(a, b) {
        var r = a - b;
        if (r === 0) {
            if (a === 0 && b === 0) {
                return 0;
            }
            if (a > 0) {
                return 1;
            }
            return -1;
        }
        return r;
    }
    function $rt_clone(instance) {
        var copy = new instance.constructor();
        for (var f in instance) {
            if (instance.hasOwnProperty(f)) {
                copy[f] = instance[f];
            }
        }
        return copy;
    }
    function $rt_identityHashCode(obj) {
        if (obj === null) {
            return 0;
        }
        var hash = obj.$id$;
        if (hash === 0) {
            hash = $rt_nextId();
            obj.$id$ = hash;
        }
        return hash;
    }
    var $rt_equals = function(a, b) {
        if (a === b) {
            return true;
        }
        if (a === null || b === null) {
            return false;
        }
        return a.$equals(b);
    };
    var $rt_hashCode = function(obj) {
        if (obj === null) {
            return 0;
        }
        return obj.$hashCode();
    };
    var $rt_toString = function(obj) {
        if (obj === null) {
            return $rt_str("null");
        }
        return obj.$toString();
    };
    function $rt_enterMonitor(obj) {
        if (obj.$monitor === null) {
            jl_Object_createMonitor(obj);
        }
        jl_Object_monitorEnter(obj.$monitor);
    }
    function $rt_exitMonitor(obj) {
        if (obj.$monitor === null) {
            jl_Object_createMonitor(obj);
        }
        jl_Object_monitorExit(obj.$monitor);
    }
    function $rt_monitorWait(obj, timeout) {
        if (obj.$monitor === null) {
            jl_Object_createMonitor(obj);
        }
        jl_Object_monitorWait(obj.$monitor, timeout);
    }
    function $rt_notifyAll(obj) {
        if (obj.$monitor !== null) {
            jl_Object_monitorNotifyAll(obj.$monitor);
        }
    }
    function $rt_put(array, index, value) {
        array.data[index] = value;
    }
    function $rt_get(array, index) {
        return array.data[index];
    }
    function $rt_str(s) {
        var cache = $rt_str.cache;
        var result = cache[s];
        if (result === undefined) {
            result = new jl_String();
            result.$str = s;
            cache[s] = result;
        }
        return result;
    }
    $rt_str.cache = {  };
    function $rt_string($s) {
        if ($s === null) {
            return null;
        }
        return $s.$str;
    }
    var $rt_intern = function(s) {
        return s;
    };
    function $rt_dbg(t, o) {
        debugger;
    }
    function $rt_dbgres(t, o) {
        debugger;
        return o;
    }
    function $rt_dbgset(t, o, v) {
        debugger;
        return v;
    }
    function $rt_floatDiv(a, b) {
        return a / b;
    }
    function $rt_doubleDiv(a, b) {
        return a / b;
    }
    function $rt_intDiv(a, b) {
        return (a / b) | 0;
    }
    function $rt_longDiv(a, b) {
        return a / b;
    }
    function $rt_intMod(a, b) {
        return a % b | 0;
    }
    function $rt_longMod(a, b) {
        return a % b;
    }
    var $rt_jso_marker = $rt_globals.Symbol("jso");
    function $rt_markjso(o) {
        o[$rt_jso_marker] = true;
        return o;
    }
    function $rt_isbyte(n) {
        return n >= -128 && n <= 127;
    }
    function $rt_isshort(n) {
        return n >= -32768 && n <= 32767;
    }
    function $rt_ischar(n) {
        return n >= 0 && n <= 65535;
    }
    function $rt_isint(n) {
        return n >= -2147483648 && n <= 2147483647;
    }
    function $rt_islong(n) {
        return true;
    }
    var $rt_nativeThread;
    var $rt_startThread;
    var $rt_primitives = {  };
    $rt_primitives[$rt_booleancls().$meta.binaryName] = true;
    $rt_primitives[$rt_bytecls().$meta.binaryName] = true;
    $rt_primitives[$rt_charcls().$meta.binaryName] = true;
    $rt_primitives[$rt_shortcls().$meta.binaryName] = true;
    $rt_primitives[$rt_intcls().$meta.binaryName] = true;
    $rt_primitives[$rt_longcls().$meta.binaryName] = true;
    $rt_primitives[$rt_floatcls().$meta.binaryName] = true;
    $rt_primitives[$rt_doublecls().$meta.binaryName] = true;
    $rt_primitives[$rt_voidcls().$meta.binaryName] = true;
    function $rt_isPrimitive(cls) {
        return cls.$meta.primitive;
    }
    function $rt_nullGetElement(arr, idx) {
        if (arr === null) {
            $rt_throwNPE();
        }
        $rt_throwAIOOBE();
    }
    function $rt_nullSetElement(arr, idx, val) {
        if (arr === null) {
            $rt_throwNPE();
        }
        $rt_throwAIOOBE();
    }
    function $rt_nullArrayLength(arr) {
        if (arr === null) {
            $rt_throwNPE();
        }
        return 0;
    }
    var $rt_stacktrace_marker = $rt_globals.Symbol("stacktrace");
    function $rt_getJavaException(e) {
        var ex = e[$rt_javaExceptionProp];
        if (ex !== undefined) {
            return ex;
        }
        return null;
    }
    function $rt_getJavaStack(e) {
        var stack = e[$rt_stacktrace_marker];
        if (stack !== undefined) {
            return stack;
        }
        return null;
    }
    function $rt_setJavaStack(e, stack) {
        e[$rt_stacktrace_marker] = stack;
    }
    function $rt_jsException(t) {
        return t.$jsException;
    }
    function $rt_javaException(e) {
        return e[$rt_javaExceptionProp];
    }
    $rt_packages(["java.lang.", "java.io.", "java.util.", "org.teavm.jso.", "org.teavm.jso.dom.events.", "org.teavm.jso.dom.html.", "org.teavm.jso.dom.xml.", "org.teavm.jso.dom.css.", "org.teavm.platform.", "net.laxaut.eaglercraft.v1_8.internal.", "net.laxaut.eaglercraft.v1_8.internal.assets.", "net.laxaut.eaglercraft.v1_8.internal.log4j.", "net.laxaut.eaglercraft.v1_8.internal.network.", "net.laxaut.eaglercraft.v1_8.internal.network.peer.", "net.laxaut.eaglercraft.v1_8.internal.query.", "net.laxaut.eaglercraft.v1_8.internal.sp.server.", "net.laxaut.eaglercraft.v1_8.internal.sp.server.integrations.", "net.laxaut.eaglercraft.v1_8.internal.sp.voice.", "net.laxaut.eaglercraft.v1_8.internal.teavm.", "net.laxaut.eaglercraft.v1_8.minecraft.client.entity.", "net.laxaut.eaglercraft.v1_8.minecraft.client.gui.", "net.laxaut.eaglercraft.v1_8.minecraft.client.model.", "net.laxaut.eaglercraft.v1_8.minecraft.client.multiplayer.", "net.laxaut.eaglercraft.v1_8.minecraft.client.network.", "net.laxaut.eaglercraft.v1_8.minecraft.client.renderer.", "net.laxaut.eaglercraft.v1_8.minecraft.client.renderer.block.model.", "net.laxaut.eaglercraft.v1_8.minecraft.client.renderer.tileentity.", "net.laxaut.eaglercraft.v1_8.minecraft.client.resources.data.", "net.laxaut.eaglercraft.v1_8.minecraft.client.shader.", "net.laxaut.eaglercraft.v1_8.minecraft.client.settings.", "net.laxaut.eaglercraft.v1_8.minecraft.client.stream.", "net.laxaut.eaglercraft.v1_8.minecraft.client.util.", "net.laxaut.eaglercraft.v1_8.minecraft.client.renderer.entity.", "net.laxaut.eaglercraft.v1_8.minecraft.entity.", "net.laxaut.eaglercraft.v1_8.minecraft.entity.ai.", "net.laxaut.eaglercraft.v1_8.minecraft.entity.monster.", "net.laxaut.eaglercraft.v1_8.minecraft.entity.passive.", "net.laxaut.eaglercraft.v1_8.minecraft.item.", "net.laxaut.eaglercraft.v1_8.minecraft.nbt.", "net.laxaut.eaglercraft.v1_8.minecraft.util.", "net.laxaut.eaglercraft.v1_8.minecraft.world.", "net.laxaut.eaglercraft.v1_8.minecraft.world.chunk.", "net.laxaut.eaglercraft.v1_8.minecraft.world.gen.", "net.laxaut.eaglercraft.v1_8.minecraft.world.storage.", "net.laxaut.eaglercraft.v1_8.optifine.", "net.laxaut.eaglercraft.v1_8.sp.relay.", "net.laxaut.eaglercraft.v1_8.sp.server.console.", "net.laxaut.eaglercraft.v1_8.sp.web.WebClient.", "net.laxaut.eaglercraft.v1_8.sp.voice.VoiceClient.", "net.laxaut.eaglercraft.v1_8.voice.exc.exceptions.", "net.laxaut.eaglercraft.v1_8.voice.exc.impl.", "net.laxaut.eaglercraft.v1_8.voice.exc.impl.webrtc.", "net.laxaut.eaglercraft.v1_8.voice.exc.interfaces.", "net.laxaut.eaglercraft.v1_8.voice.exc.interfaces.webrtc.", "net.laxaut.eaglercraft.v1_8.voice.exc.interfaces.js.", "net.laxaut.eaglercraft.v1_8.voice.exc.util.", "net.laxaut.eaglercraft.v1_8.voice.exc.util.webrtc.", "net.laxaut.eaglercraft.v1_8.voice.exc.util.js.", "net.laxaut.eaglercraft.v1_8.voice.exc.util.java.", "net.laxaut.eaglercraft.v1_8.voice.exc.impl.js.", "net.laxaut.eaglercraft.v1_8.voice.exc.impl.java.", "net.laxaut.eaglercraft.v1_8.voice.exc.interfaces.java.", "net.laxaut.eaglercraft.v1_8.voice.exc.interfaces.jvm.", "net.laxaut.eaglercraft.v1_8.voice.exc.interfaces.teavm.", "net.laxaut.eaglercraft.v1_8.voice.exc.impl.teavm.", "net.laxaut.eaglercraft.v1_8.voice.exc.api.", "net.laxaut.eaglercraft.v1_8.voice.exc.api.webrtc.", "net.laxaut.eaglercraft.v1_8.voice.exc.api.js.", "net.laxaut.eaglercraft.v1_8.voice.exc.api.java.", "net.laxaut.eaglercraft.v1_8.voice.exc.api.jvm.", "net.laxaut.eaglercraft.v1_8.voice.exc.api.teavm.", "net.laxaut.eaglercraft.v1_8.voice.exc.impl.webrtc.webrtc_impl.", "net.laxaut.eaglercraft.v1_8.voice.exc.interfaces.webrtc.webrtc_impl.", "net.laxaut.eaglercraft.v1_8.voice.exc.interfaces.js.js_impl.", "net.laxaut.eaglercraft.v1_8.voice.exc.interfaces.java.java_impl.", "net.laxaut.eaglercraft.v1_8.voice.exc.interfaces.jvm.jvm_impl.", "net.laxaut.eaglercraft.v1_8.voice.exc.interfaces.teavm.teavm_impl.", "net.laxaut.eaglercraft.v1_8.voice.exc.api.webrtc.webrtc_impl.", "net.laxaut.eaglercraft.v1_8.voice.exc.api.js.js_impl.", "net.laxaut.eaglercraft.v1_8.voice.exc.api.java.java_impl.", "net.laxaut.eaglercraft.v1_8.voice.exc.api.jvm.jvm_impl.", "net.laxaut.eaglercraft.v1_8.voice.exc.api.teavm.teavm_impl.", "com.google.common.base.", "com.google.common.collect.", "com.google.common.io.", "org.apache.commons.lang3.builder.", "org.apache.commons.lang3.math."]);
    var jl_Object = $rt_createcls();
    var jl_Class = $rt_createcls();
    var jl_String = $rt_createcls();
    var jl_Throwable = $rt_createcls();
    var jl_RuntimeException = $rt_createcls();
    var jl_IllegalStateException = $rt_createcls();
    var jl_System = $rt_createcls();
    var jl_Thread = $rt_createcls();
    var jl_Integer = $rt_createcls();
    var jl_Long = $rt_createcls();
    var jl_Math = $rt_createcls();
    var jl_Void = $rt_createcls();
    var ji_Serializable = $rt_createcls();
    var ji_Iterable = $rt_createcls();
    var ju_Collection = $rt_createcls();
    var ju_List = $rt_createcls();
    var ju_Set = $rt_createcls();
    var ju_Map = $rt_createcls();
    var ju_Iterator = $rt_createcls();
    var ju_HashMap = $rt_createcls();
    var ju_HashSet = $rt_createcls();
    var ju_ArrayList = $rt_createcls();
    var ju_Arrays = $rt_createcls();
    var jnc_Charset = $rt_createcls();
    var jnc_CharsetDecoder = $rt_createcls();
    var jnc_CharsetEncoder = $rt_createcls();
    var jnci_UTF8Charset = $rt_createcls();
    var jnci_UTF16Charset = $rt_createcls();
    var otj_JSObject = $rt_createcls();
    var otjc_JSWeakRef = $rt_createcls();
    var otjc_JSFinalizationRegistry = $rt_createcls();
    var otjc_JSMap = $rt_createcls();
    var nlevit_ClientMain = $rt_createcls();
    var nlevl_Logger = $rt_createcls();
    var nlevl_LogManager = $rt_createcls();
    var nlevl_Level = $rt_createcls();
    var nlevss_EaglerIntegratedServerWorker = $rt_createcls();
    var nlevssit_WorkerMain = $rt_createcls();
    var nlevn_NioBufferFunctions = $rt_createcls();
    var nmcr_ResourceLocation = $rt_createcls();
    var nmcrd_AnimationMetadataSection = $rt_createcls();
    var nmcg_FontRenderer = $rt_createcls();
    var nmcm_ModelBase = $rt_createcls();
    var nmcm_ModelRenderer = $rt_createcls();
    var nmcm_ModelSign = $rt_createcls();
    var nme_Entity = $rt_createcls();
    var nme_EnumCreatureAttribute = $rt_createcls();
    var nme_EntityList = $rt_createcls();
    var nme_EntityOtherPlayerMP = $rt_createcls();
    var nmep_EntityPlayer = $rt_createcls();
    var nmi_EnumRarity = $rt_createcls();
    var nmu_ChatComponentSelector = $rt_createcls();
    var nmu_AxisAlignedBB = $rt_createcls();
    var nmw_World = $rt_createcls();
    var nea_BaseData = $rt_createcls();
    var cgcb_CharMatcher = $rt_createcls();
    var cgcb_CharMatcher$Or = $rt_createcls();
    var cgcc_AbstractIterator = $rt_createcls();
    var cgcc_AbstractIterator$State = $rt_createcls();
    var cgcc_AbstractMapBasedMultiset = $rt_createcls();
    var cgcc_AbstractMapBasedMultiset$1 = $rt_createcls();
    var cgcc_AbstractMapBasedMultiset$1$1 = $rt_createcls();
    var cgcc_ImmutableCollection = $rt_createcls();
    var cgcc_ImmutableMultiset$EntrySet = $rt_createcls();
    var cgcc_ImmutableMultiset$EntrySet$1 = $rt_createcls();
    var cgcc_Multiset$Entry = $rt_createcls();
    var cgcc_Multisets$AbstractEntry = $rt_createcls();
    var cgcc_ImmutableAsList = $rt_createcls();
    var nmbs_BlockStateBase$1 = $rt_createcls();
    var nmbp_Property = $rt_createcls();
    var nlevsi_IPCPacketFFProcessKeepAlive = $rt_createcls();
    var jl_ArrayIndexOutOfBoundsException = $rt_createcls();
    var jl_ClassCastException = $rt_createcls();
    var jl_Cloneable = $rt_createcls();
    var jl_Comparable = $rt_createcls();
    var jl_Runnable = $rt_createcls();
    var jl_StackTraceElement = $rt_createcls();
    var jl_System$Properties = $rt_createcls();
    var jl_Boolean = $rt_createcls();
    var jl_Character = $rt_createcls();
    var jl_Byte = $rt_createcls();
    var jl_Short = $rt_createcls();
    var jl_Float = $rt_createcls();
    var jl_Double = $rt_createcls();
    var ji_AutoCloseable = $rt_createcls();
    var ji_Closeable = $rt_createcls();
    var ji_Externalizable = $rt_createcls();
    var ji_Flushable = $rt_createcls();
    var ji_IOB = $rt_createcls();
    var ji_ObjectInput = $rt_createcls();
    var ji_ObjectOutput = $rt_createcls();
    var ji_RandomAccess = $rt_createcls();
    var ji_Serializable = $rt_createcls();
    var ji_InputStream = $rt_createcls();
    var ji_OutputStream = $rt_createcls();
    var ji_Reader = $rt_createcls();
    var ji_Writer = $rt_createcls();
    var ju_AbstractCollection = $rt_createcls();
    var ju_AbstractList = $rt_createcls();
    var ju_AbstractMap = $rt_createcls();
    var ju_AbstractMap$SimpleEntry = $rt_createcls();
    var ju_AbstractSet = $rt_createcls();
    var ju_Deque = $rt_createcls();
    var ju_EnumSet = $rt_createcls();
    var ju_Map$Entry = $rt_createcls();
    var ju_Queue = $rt_createcls();
    var ju_SortedMap = $rt_createcls();
    var ju_SortedSet = $rt_createcls();
    var ju_Spliterator = $rt_createcls();
    var ju_Spliterators = $rt_createcls();
    var ju_Stack = $rt_createcls();
    var ju_Vector = $rt_createcls();
    var ju_concurrent_Callable = $rt_createcls();
    var ju_function_BiConsumer = $rt_createcls();
    var ju_function_BiFunction = $rt_createcls();
    var ju_function_BinaryOperator = $rt_createcls();
    var ju_function_Consumer = $rt_createcls();
    var ju_function_Function = $rt_createcls();
    var ju_function_Predicate = $rt_createcls();
    var ju_function_Supplier = $rt_createcls();
    var jnc_CoderResult = $rt_createcls();
    var jnc_CodingErrorAction = $rt_createcls();
    var jnci_SingleByteCharset = $rt_createcls();
    var otjd_Event = $rt_createcls();
    var otjd_EventListener = $rt_createcls();
    var otjd_EventTarget = $rt_createcls();
    var otjd_KeyboardEvent = $rt_createcls();
    var otjd_MouseEvent = $rt_createcls();
    var otjh_HTMLCanvasElement = $rt_createcls();
    var otjh_HTMLDocument = $rt_createcls();
    var otjh_HTMLElement = $rt_createcls();
    var otjh_HTMLImageElement = $rt_createcls();
    var otjh_HTMLLinkElement = $rt_createcls();
    var otjh_HTMLVideoElement = $rt_createcls();
    var otjx_XMLHttpRequest = $rt_createcls();
    var otjx_XMLHttpResponseType = $rt_createcls();
    var otjx_DOMParser = $rt_createcls();
    var otjx_Document = $rt_createcls();
    var otjx_Element = $rt_createcls();
    var otjx_Node = $rt_createcls();
    var otjx_Text = $rt_createcls();
    var otjc_JSArray = $rt_createcls();
    var otjc_JSBoolean = $rt_createcls();
    var otjc_JSNumber = $rt_createcls();
    var otjc_JSString = $rt_createcls();
    var otjc_JSWindow = $rt_createcls();
    var otjc_JSXMLHttpRequest = $rt_createcls();
    var otjp_Async = $rt_createcls();
    var otjp_Console = $rt_createcls();
    var otjp_JavaScript = $rt_createcls();
    var nlevi_EaglercraftInternal = $rt_createcls();
    var nlevia_FileImporter = $rt_createcls();
    var nlevia_TextureAnimation = $rt_createcls();
    var nlevl_IPrintStream = $rt_createcls();
    var nlevl_RedirectPrintStream = $rt_createcls();
    var nlevn_IPCPacket = $rt_createcls();
    var nlevn_IPCPacketManager = $rt_createcls();
    var nlevp_PlatformRuntime = $rt_createcls();
    var nlevpb_BufferArray = $rt_createcls();
    var nlevs_IntegratedServer = $rt_createcls();
    var nlevsi_IPCPacket0Handshake = $rt_createcls();
    var nlevsi_IPCPacket1Slab = $rt_createcls();
    var nlevsi_IPCPacket2Slap = $rt_createcls();
    var nlevsi_IPCPacket3HandshakeACK = $rt_createcls();
    var nlevt_TeaVMHooks = $rt_createcls();
    var nlevt_WebGLFramebuffer = $rt_createcls();
    var nlevt_WebGLRenderingContext = $rt_createcls();
    var nlevt_WebGLTexture = $rt_createcls();
    var nlevt_WebGLUniformLocation = $rt_createcls();
    var nlevw_VoiceReceiver = $rt_createcls();
    var nlevw_VoiceTransmitter = $rt_createcls();
    var nmcr_ResourcePackRepository = $rt_createcls();
    var nmcra_Abstract};
    
This file appears to be part of a JavaScript runtime environment, possibly for a game or application, given the presence of terms like "Minecraft" and "Eaglercraft" in the package names. It includes functionalities related to:

* **Core JavaScript runtime utilities:** Such as array creation, type checking, number conversions, and exception handling.
* **Object and class management:** Defining how objects, classes, and their metadata are handled in the runtime.
* **Threading and synchronization:** Functions for starting threads and managing monitors for object synchronization.
* **Native JavaScript Object (JSO) interop:** Providing methods to interact with native JavaScript objects, including accessing fields, invoking methods, and handling global objects.
* **Specific application-related classes:** Numerous classes related to Minecraft entities, models, rendering, network packets, and internal utilities (e.g., `nme_Entity`, `nmcm_ModelBase`, `nlevn_IPCPacket`).
* **Logging and error handling:** Including classes for logging messages with different levels and handling uncaught exceptions.
* **Data structures and utilities:** Such as `HashMap`, `ArrayList`, `CharMatcher`, and `ToStringStyle`.
* **WebRTC-related functionalities:** Classes and interfaces related to voice communication, indicating potential in-game voice chat features (e.g., `nlevw_VoiceReceiver`, `nlevw_VoiceTransmitter`, and various `voice.exc` packages).

The code defines various runtime functions prefixed with `$rt_`, which are likely internal functions for managing the JavaScript execution environment. It also contains metadata and method definitions for a large number of classes, suggesting a comprehensive mapping between Java (or a similar language) and JavaScript.
