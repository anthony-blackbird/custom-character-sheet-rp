<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/webpack-test", name="webpack-test")
     */
    public function index()
    {
        $charSheet = [
            'infos' => [
                'username' => 'John Doe'
            ],
            'masteryScore' => 3,
            'abilities' => [
                'strength' => [
                    'code' => 'strength',
                    'name' => 'Force',
                    'value' => 8,
                    'hasMastery' => false,
                ],
                'dexterity' => [
                    'code' => 'dexterity',
                    'name' => 'Dexterité',
                    'value' => 10,
                    'hasMastery' => false,
                ],
                'constitution' => [
                    'code' => 'constitution',
                    'name' => 'Constitution',
                    'value' => 14,
                    'hasMastery' => false,
                ],
                'intelligence' => [
                    'code' => 'intelligence',
                    'name' => 'Intelligence',
                    'value' => 12,
                    'hasMastery' => false,
                ],
                'wisdom' => [
                    'code' => 'wisdom',
                    'name' => 'Sagesse',
                    'value' => 16,
                    'hasMastery' => true,
                ],
                'charisma' => [
                    'code' => 'charisma',
                    'name' => 'Charisme',
                    'value' => 16,
                    'hasMastery' => true,
                ],
            ]
        ];

        return $this->render('webpack-test.html.twig',
            [
                'char_sheet' => json_encode($charSheet)
            ]
        );
    }
}