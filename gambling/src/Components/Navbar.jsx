import '../App.css';
import 'bulma/css/bulma.min.css';


export default function Navbar() {
    return(
        <div>
            <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                <a class="navbar-item">
                    Coin toss
                </a>

                <a class="navbar-item">
                    Rock, Paper, Scissors
                </a>

                <a class="navbar-item">
                    Black Jack
                </a>

                </div>
            </div>
            </nav>
        </div>
    )
}