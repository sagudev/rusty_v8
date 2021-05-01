##

# load spidershim headers
CXXFLAGS := \
	-I $(SRC_DIR)/include \
	-I $(SRC_DIR)/src

# SpiderMonkey 
CXXFLAGS += \
	-include $(MOZ_OUT)/dist/include/js/RequiredDefines.h \
	-I $(MOZ_OUT)/dist/include \
	-I $(MOZ_OUT)/js/src \
	-L $(MOZ_OUT)/js/src/build -llibjs_static \
	-DSTATIC_JS_API \
	-std=c++17

ifneq ($(PROFILE),"release")
	CXXFLAGS += -DDEBUG
endif

include $(dir $(abspath $(firstword $(MAKEFILE_LIST))))cc.mk

.PHONY : all v8 test

#mozjs:
#	$(info SPIDERSHIM: mozjs)
#	$(MAKE) -f spidermonkey.mk

# $(wildcard *.cpp /xxx/xxx/*.cpp): get all .cpp files from the current directory and dir "/xxx/xxx/"

SRC := $(SRC_DIR)/src

SOURCES := $(wildcard $(SRC)/*.cc)
OBJECTS := $(patsubst $(SRC)/%.cc, %.o, $(SOURCES))

all: $(OBJECTS)
	$(CPP) $^ -o $@

%.o: $(SRC)/%.cc
	$(CPP) $(CXXFLAGS) -c $< -o $@