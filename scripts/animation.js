(function (cjs, an) {

    var p; // shortcut to reference prototypes
    var lib={};var ss={};var img={};
    lib.ssMetadata = [
            {name:"better animation_atlas_1", frames: [[641,1035,206,110],[428,1035,211,158],[0,1035,426,175],[0,0,1920,1033]]}
    ];
    
    
    (lib.AnMovieClip = function(){
        this.actionFrames = [];
        this.ignorePause = false;
        this.gotoAndPlay = function(positionOrLabel){
            cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
        }
        this.play = function(){
            cjs.MovieClip.prototype.play.call(this);
        }
        this.gotoAndStop = function(positionOrLabel){
            cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
        }
        this.stop = function(){
            cjs.MovieClip.prototype.stop.call(this);
        }
    }).prototype = p = new cjs.MovieClip();
    // symbols:
    
    
    
    (lib.CachedBmp_36 = function() {
        this.initialize(ss["better animation_atlas_1"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.CachedBmp_35 = function() {
        this.initialize(ss["better animation_atlas_1"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.CachedBmp_34 = function() {
        this.initialize(ss["better animation_atlas_1"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.CachedBmp_33 = function() {
        this.initialize(img.CachedBmp_33);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,4048,421);
    
    
    (lib.CachedBmp_32 = function() {
        this.initialize(img.CachedBmp_32);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,4048,421);
    
    
    (lib.CachedBmp_31 = function() {
        this.initialize(img.CachedBmp_31);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,4270,1031);
    
    
    (lib.CachedBmp_30 = function() {
        this.initialize(img.CachedBmp_30);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,4270,1642);
    
    
    (lib.CachedBmp_29 = function() {
        this.initialize(img.CachedBmp_29);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,4048,1510);
    
    
    (lib.CachedBmp_28 = function() {
        this.initialize(img.CachedBmp_28);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,4048,2451);
    
    
    (lib._37683 = function() {
        this.initialize(img._37683);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,6325,3514);
    
    
    (lib.gwyx_oxp8_210409_ss4mp_generated = function() {
        this.initialize(ss["better animation_atlas_1"]);
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    // helper functions:
    
    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }
    
    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
        }
    
    
    (lib.Tween8 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this,[props]);
    
        // Layer_1
        this.instance = new lib._37683();
        this.instance.setTransform(-499.9,-277.75,0.1581,0.1581);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
        this._renderFirstFrame();
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-499.9,-277.7,999.9,555.5);
    
    
    (lib.Tween6 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this,[props]);
    
        // Layer_1
        this.instance = new lib.CachedBmp_36();
        this.instance.setTransform(-5,-72.6,0.5,0.5);
    
        this.instance_1 = new lib.CachedBmp_35();
        this.instance_1.setTransform(-114.55,-75.75,0.5,0.5);
    
        this.instance_2 = new lib.CachedBmp_34();
        this.instance_2.setTransform(-77.75,-20.85,0.5,0.5);
    
        this.instance_3 = new lib.gwyx_oxp8_210409_ss4mp_generated();
        this.instance_3.setTransform(-134.8,-56.35,0.1301,0.1301,-4.9389);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
    
        this._renderFirstFrame();
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-134.8,-77.8,270.1,155.39999999999998);
    
    
    (lib.Path_4 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this,[props]);
    
        // Layer_1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#BBEAFF").s().p("AvojIQAqAIAhgDQAdgDAxgOQBCgRAcgBQAagBBCALIB0AVQA8AHA3gSQBKgYAxgHQA9gIA7AKICPAXQAvAFA1gQQBBgTArgEQAygGAsAMQA6APAZADQAoAFAmgKQBIgYAzgHQA/gKA0AMQBMAQAKABQAlAEA5gMQBJgPA1ALQAaAFAMAIIAAH7I/RADg");
        this.shape.setTransform(100.075,26.7851);
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    
        this._renderFirstFrame();
    
    }).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,200.2,53.6), null);
    
    
    (lib.Group_7 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this,[props]);
    
        // Layer_1
        this.instance = new lib.CachedBmp_33();
        this.instance.setTransform(0,0,0.0469,0.0469);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
        this._renderFirstFrame();
    
    }).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(0,0,189.8,19.8), null);
    
    
    (lib.Group_6 = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this,[props]);
    
        // Layer_1
        this.instance = new lib.CachedBmp_32();
        this.instance.setTransform(0,0,0.0469,0.0469);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
        this._renderFirstFrame();
    
    }).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0,0,189.8,19.8), null);
    
    
    (lib.ClipGroup = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this,[props]);
    
        // Layer_2 (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("AuDH0IAAvnIcHAAIAAPng");
        mask.setTransform(99.45,56.25);
    
        // Layer_3
        this.instance = new lib.CachedBmp_31();
        this.instance.setTransform(0,71.35,0.0469,0.0469);
    
        this.instance_1 = new lib.Path_4();
        this.instance_1.setTransform(100,92.9,1,1,0,0,0,100,26.8);
        this.instance_1.alpha = 0.8984;
    
        this.instance_2 = new lib.CachedBmp_30();
        this.instance_2.setTransform(0,41.4,0.0469,0.0469);
    
        this.instance_3 = new lib.Group_6();
        this.instance_3.setTransform(98.85,12.95,1,1,0,0,0,94.9,9.9);
        this.instance_3.alpha = 0.3984;
    
        this.instance_4 = new lib.CachedBmp_29();
        this.instance_4.setTransform(4,44.1,0.0469,0.0469);
    
        this.instance_5 = new lib.Group_7();
        this.instance_5.setTransform(98.85,33.35,1,1,0,0,0,94.9,9.9);
        this.instance_5.alpha = 0.3984;
    
        this.instance_6 = new lib.CachedBmp_28();
        this.instance_6.setTransform(4,0,0.0469,0.0469);
    
        var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6];
    
        for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
            maskedShapeInstanceList[shapedInstanceItr].mask = mask;
        }
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
    
        this._renderFirstFrame();
    
    }).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(9.5,6.3,180,100), null);
    
    
    // stage content:
    (lib.betteranimation = function(mode,startPosition,loop,reversed) {
    if (loop == null) { loop = true; }
    if (reversed == null) { reversed = false; }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this,[props]);
    
        // Layer_1
        this.instance = new lib.Tween6("synched",0);
        this.instance.setTransform(-121.65,138.75);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-79.15},2).to({x:4.25,y:130.75},2).to({x:71.6,y:150},2).to({x:227.95,y:171.65},3).to({x:649.75,y:124.35},5).to({x:967.35,y:168.45},5).to({x:1232,y:139.6},5).to({rotation:-6.9526,x:1483,y:159.6},5).to({rotation:8.0461,x:1604.15,y:120.3},5).to({x:1747.7,y:155.55},5).to({rotation:-6.9527,x:1848,y:145.9},5).to({x:2089.35,y:137.85},5).wait(1));
    
        // Layer_3
        this.instance_1 = new lib.Tween8("synched",0);
        this.instance_1.setTransform(703.45,71.05,1.9203,1.0476);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:737.9,y:47.6},4).to({x:852.2,y:74.2},5).to({x:916.4,y:35.1},5).to({x:975.9,y:71.1},5).to({x:928.9,y:44.5},5).to({x:880.4,y:69.55},5).to({x:830.3,y:36.7},5).to({x:748.9,y:72.7},5).to({x:662.8,y:36.7},5).wait(6));
    
        // Layer_2
        this.instance_2 = new lib.ClipGroup();
        this.instance_2.setTransform(964.8,64.4,10.6665,5.072,0,0,0,99.9,59.8);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));
    
        this._renderFirstFrame();
    
    }).prototype = p = new lib.AnMovieClip();
    p.nominalBounds = new cjs.Rectangle(662.9,-105.8,1568.7999999999997,474);
    // library properties:
    lib.properties = {
        id: 'CCE4D9C0524AE6409EDFB46221F3C387',
        width: 1920,
        height: 300,
        fps: 5,
        color: "#FFFFFF",
        opacity: 1.00,
        manifest: [
            {src:"images/CachedBmp_33.png", id:"CachedBmp_33"},
            {src:"images/CachedBmp_32.png", id:"CachedBmp_32"},
            {src:"images/CachedBmp_31.png", id:"CachedBmp_31"},
            {src:"images/CachedBmp_30.png", id:"CachedBmp_30"},
            {src:"images/CachedBmp_29.png", id:"CachedBmp_29"},
            {src:"images/CachedBmp_28.png", id:"CachedBmp_28"},
            {src:"images/_37683.png", id:"_37683"},
            {src:"images/better animation_atlas_1.png", id:"better animation_atlas_1"}
        ],
        preloads: []
    };
    
    
    
    // bootstrap callback support:
    
    (lib.Stage = function(canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();
    
    p.setAutoPlay = function(autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
    p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
    p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
    p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }
    
    p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }
    
    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if(!an.bootstrapListeners) {
        an.bootstrapListeners=[];
    }
    
    an.bootstrapCallback=function(fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if(an.bootcompsLoaded.length > 0) {
            for(var i=0; i<an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };
    
    an.compositions = an.compositions || {};
    an.compositions['CCE4D9C0524AE6409EDFB46221F3C387'] = {
        getStage: function() { return exportRoot.stage; },
        getLibrary: function() { return lib; },
        getSpriteSheet: function() { return ss; },
        getImages: function() { return img; }
    };
    
    an.compositionLoaded = function(id) {
        an.bootcompsLoaded.push(id);
        for(var j=0; j<an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }
    
    an.getComposition = function(id) {
        return an.compositions[id];
    }
    
    
    an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
        var lastW, lastH, lastS=1;		
        window.addEventListener('resize', resizeCanvas);		
        resizeCanvas();		
        function resizeCanvas() {			
            var w = lib.properties.width, h = lib.properties.height;			
            var iw = window.innerWidth, ih=window.innerHeight;			
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
            if(isResp) {                
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
                    sRatio = lastS;                
                }				
                else if(!isScale) {					
                    if(iw<w || ih<h)						
                        sRatio = Math.min(xRatio, yRatio);				
                }				
                else if(scaleType==1) {					
                    sRatio = Math.min(xRatio, yRatio);				
                }				
                else if(scaleType==2) {					
                    sRatio = Math.max(xRatio, yRatio);				
                }			
            }
            domContainers[0].width = w * pRatio * sRatio;			
            domContainers[0].height = h * pRatio * sRatio;
            domContainers.forEach(function(container) {				
                container.style.width = w * sRatio + 'px';				
                container.style.height = h * sRatio + 'px';			
            });
            stage.scaleX = pRatio*sRatio;			
            stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;            
            stage.tickOnUpdate = false;            
            stage.update();            
            stage.tickOnUpdate = true;		
        }
    }
    an.handleSoundStreamOnTick = function(event) {
        if(!event.paused){
            var stageChild = stage.getChildAt(0);
            if(!stageChild.paused || stageChild.ignorePause){
                stageChild.syncStreamSounds();
            }
        }
    }
    an.handleFilterCache = function(event) {
        if(!event.paused){
            var target = event.target;
            if(target){
                if(target.filterCacheList){
                    for(var index = 0; index < target.filterCacheList.length ; index++){
                        var cacheInst = target.filterCacheList[index];
                        if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
                            cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
                        }
                    }
                }
            }
        }
    }
    
    
    })(createjs = createjs||{}, AdobeAn = AdobeAn||{});
    var createjs, AdobeAn;