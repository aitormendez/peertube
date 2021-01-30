<?php
/**
 * Plugin Name:     Peertube video
 * Description:     Insertar contenido de peertube
 * Version:         1.0.1
 * Author:          Aitor Méndez
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licens
 * Text Domain:     peertube
 *
 * @package         e451
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function e_451_peertube_block_init() {
	$dir = __DIR__;

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "e451/peertube" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'e451-peertube-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'e451-peertube-block-editor', 'peertube' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'e451-peertube-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'e451-peertube-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type(
		'e451/peertube',
		array(
			'editor_script' => 'e451-peertube-block-editor',
			'editor_style'  => 'e451-peertube-block-editor',
			'style'         => 'e451-peertube-block',
		)
	);
}
add_action( 'init', 'e_451_peertube_block_init' );
