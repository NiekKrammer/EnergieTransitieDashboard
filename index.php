<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Energie Transitie</title>
</head>

<body>
    <section class="dashboard">

        <nav>
            <span></span>
            <img src="imgs/power-icon.png">
            <h1>Power Generation</h1>
            <div class="dropdown">
                <button class="dropbtn"><i class="fa-solid fa-clock"></i> 24 hours</button>
                <div class="dropdown-content">
                    <a href="#">1 week</a>
                    <a href="#">1 month</a>
                    <a href="#">3 months</a>
                </div>
            </div>
            <button class="dropbtn"><i class="fa-solid fa-share"></i> Share</button>
        </nav>

        <!-- top section cards -->
        <div class="top-cards">

            <div class="card" draggable="true">
                <div class="top-card-section">
                    <span class="green_dot"></span>
                    <h2>Chart 1</h2>
                    <i class="fa-solid fa-ellipsis-vertical dropdown-icon drop-icon"></i>
                    <div class="dropdown-menu-card">
                        <p>Data types</p>
                        <button>data type 1</button>
                        <button>data type 2</button>
                        <button>data type 3</button>
                        <button>data type 4</button>
                    </div>
                </div>
                <canvas id="bar"></canvas>
                <div class="resize-icons">
                    <i class="fa-solid fa-minus"></i>
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>

            <div class="card" draggable="true">
                <div class="top-card-section">
                    <span class="red_dot"></span>
                    <h2>Chart 2</h2>
                    <i class="fa-solid fa-ellipsis-vertical dropdown-icon drop-icon"></i>
                    <div class="dropdown-menu-card">
                        <p>Data types</p>
                        <button>data type 1</button>
                        <button>data type 2</button>
                        <button>data type 3</button>
                        <button>data type 4</button>
                    </div>
                </div>
                <canvas id="doughnut"></canvas>
                <div class="resize-icons">
                    <i class="fa-solid fa-minus"></i>
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>

            <div class="card" draggable="true">
                <div class="top-card-section">
                    <span class="yellow_dot"></span>
                    <h2>Chart 3</h2>
                    <i class="fa-solid fa-ellipsis-vertical dropdown-icon drop-icon"></i>
                    <div class="dropdown-menu-card">
                        <p>Data types</p>
                        <button>data type 1</button>
                        <button>data type 2</button>
                        <button>data type 3</button>
                        <button>data type 4</button>
                    </div>
                </div>
                <canvas class="line"></canvas>
                <div class="resize-icons">
                    <i class="fa-solid fa-minus"></i>
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>

            <div class="card" draggable="true">
                <div class="top-card-section">
                    <span class="green_dot"></span>
                    <h2>Chart 4</h2>
                    <i class="fa-solid fa-ellipsis-vertical dropdown-icon drop-icon"></i>
                    <div class="dropdown-menu-card">
                        <p>Data types</p>
                        <button>data type 1</button>
                        <button>data type 2</button>
                        <button>data type 3</button>
                        <button>data type 4</button>
                    </div>
                </div>
                <canvas id="polarArea"></canvas>
                <div class="resize-icons">
                    <i class="fa-solid fa-minus"></i>
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>

        </div>

        <!-- bottom section cards -->
        <div class="bottom-cards">

            <div class="card1" draggable="true">
                <div class="top-card-section">
                    <span class="green_dot"></span>
                    <h2>Chart 4</h2>
                    <i class="fa-solid fa-ellipsis-vertical dropdown-icon drop-icon"></i>
                    <div class="dropdown-menu-card">
                        <p>Data types</p>
                        <button>data type 1</button>
                        <button>data type 2</button>
                        <button>data type 3</button>
                        <button>data type 4</button>
                    </div>
                </div>
                <canvas id="polarArea"></canvas>
                <div class="resize-icons">
                    <i class="fa-solid fa-minus"></i>
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>


            <div class="card" draggable="true">
                <div class="top-card-section">
                    <span class="green_dot"></span>
                    <h2>Chart 4</h2>
                    <i class="fa-solid fa-ellipsis-vertical dropdown-icon drop-icon"></i>
                    <div class="dropdown-menu-card">
                        <p>Data types</p>
                        <button>data type 1</button>
                        <button>data type 2</button>
                        <button>data type 3</button>
                        <button>data type 4</button>
                    </div>
                </div>
                <canvas id="polarArea"></canvas>
                <div class="resize-icons">
                    <i class="fa-solid fa-minus"></i>
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>


            <div class="card" draggable="true">
                <div class="top-card-section">
                    <span class="green_dot"></span>
                    <h2>Chart 4</h2>
                    <i class="fa-solid fa-ellipsis-vertical dropdown-icon drop-icon"></i>
                    <div class="dropdown-menu-card">
                        <p>Data types</p>
                        <button>data type 1</button>
                        <button>data type 2</button>
                        <button>data type 3</button>
                        <button>data type 4</button>
                    </div>
                </div>
                <canvas class="line"></canvas>
                <div class="resize-icons">
                    <i class="fa-solid fa-minus"></i>
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>

        </div>

    </section>

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="script.js"></script>
    <script src="charts.js"></script>
</body>

</html>