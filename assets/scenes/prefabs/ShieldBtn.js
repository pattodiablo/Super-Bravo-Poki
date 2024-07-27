
// You can write more code here

/* START OF COMPILED CODE */

class ShieldBtn extends Phaser.GameObjects.Image {
	
	constructor(scene, x, y, texture, frame) {
		super(scene, x, y, texture || "shield", frame);
		
		/* START-USER-CTR-CODE */
		this.scene.events.on("create", () => this.create());
		/* END-USER-CTR-CODE */
	}
	
	/** @type {number} */
	itemValue = 10;
	
	/* START-USER-CODE */
	create(){

		//this.envi_button_01 = this.scene.sound.add('envi_button_01');
		//this.envi_button_01.loop = false;
		
		this.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
		
	//	console.log("doing something")
		//this.envi_button_01.play();
	});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
