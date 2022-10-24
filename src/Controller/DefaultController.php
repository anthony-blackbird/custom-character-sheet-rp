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
        return $this->render('webpack-test.html.twig');
    }
}