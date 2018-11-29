<?php
/**
 * @package     mod_wl_audioplayer
 * @author      Thomas Winterling
 * @email       info@winterling-labs.com
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

JLoader::register('ModWL_AudioplayerHelper', __DIR__ . '/helper.php');


// Check for a custom CSS file
JHtml::_('stylesheet', 'mod_wl_audioplayer/user.css', array('version' => 'auto', 'relative' => true));

require_once JModuleHelper::getLayoutPath('mod_wl_audioplayer', $params->get('layout', 'default'));