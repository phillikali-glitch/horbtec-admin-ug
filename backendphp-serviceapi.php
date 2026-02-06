<?php
require_once __DIR__ . '/vendor/autoload.php';

use Uganda\Uganda;

$uganda = new Uganda();
$action = $_GET['action'] ?? '';
$district = $_GET['district'] ?? '';

header('Content-Type: application/json');

switch($action) {
    case 'districts':
        echo json_encode($uganda->districts());
        break;
    case 'hierarchy':
        if ($district) {
            $result = [
                'district' => $district,
                'counties' => $uganda->district($district)->counties(),
                'subcounties' => $uganda->district($district)->subCounties(),
                'parishes' => $uganda->district($district)->parishes(),
                'villages' => $uganda->district($district)->villages()
            ];
            echo json_encode($result);
        }
        break;
}