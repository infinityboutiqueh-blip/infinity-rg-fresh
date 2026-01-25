<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Infinity RG | Luxury Real Estate & Property Management</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Infinity RG — luxury real estate and property management. Curated acquisitions, landlord services, and value strategy." />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet">

  <style>
    :root{
      --bg:#0B0D10;
      --bg2:#0F131A;
      --ink:#F5F2EA;
      --muted:#B7B1A6;
      --gold:#B89B5E;
      --line:rgba(245,242,234,.12);
      --radius:18px;
      --max:1120px;
    }

    *{box-sizing:border-box}
    body{
      margin:0;
      font-family:Inter,system-ui,Arial,sans-serif;
      background:linear-gradient(180deg,var(--bg),var(--bg2));
      color:var(--ink);
    }

    a{color:inherit;text-decoration:none}
    .wrap{max-width:var(--max);margin:auto;padding:0 20px}

    /* NAV */
    header{
      position:sticky;
      top:0;
      z-index:10;
      background:rgba(11,13,16,.8);
      backdrop-filter:blur(10px);
      border-bottom:1px solid var(--line);
    }
    nav{
      display:flex;
      justify-content:space-between;
      align-items:center;
      height:72px;
    }
    .brand{
      font-family:"Playfair Display",serif;
      font-size:20px;
      letter-spacing:.1em;
    }
    .menu a{
      margin:0 12px;
      font-size:13px;
      color:var(--muted);
    }
    .menu a:hover{color:var(--ink)}
    .btn{
      padding:12px 14px;
      border-radius:14px;
      border:1px solid var(--line);
      background:rgba(255,255,255,.04);
      font-size:13px;
    }
    .btn.primary{
      border-color:var(--gold);
      background:linear-gradient(180deg,rgba(184,155,94,.25),rgba(184,155,94,.1));
    }

    /* HERO */
    .hero{
      padding:70px 0 50px;
    }
    .hero span{
      color:var(--gold);
      letter-spacing:.2em;
      font-size:12px;
    }
    .hero h1{
      font-family:"Playfair Display",serif;
      font-size:52px;
      margin:16px 0;
    }
    .hero p{
      max-width:600px;
      color:var(--muted);
      line-height:1.7;
    }
    .hero-actions{margin-top:24px}
    .hero-actions .btn{margin-right:10px}

    /* SECTIONS */
    section{
      padding:60px 0;
      border-top:1px solid var(--line);
    }
    h2{
      font-family:"Playfair Display",serif;
      font-size:30px;
      margin-bottom:10px;
    }
    .sub{
      color:var(--muted);
      max-width:700px;
    }

    /* CARDS */
    .grid3{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:18px;
      margin-top:30px;
    }
    .card{
      border:1px solid var(--line);
      border-radius:var(--radius);
      padding:20px;
      background:rgba(255,255,255,.03);
    }
    .card h3{margin-top:0;font-size:15px}
    .card p{color:var(--muted);line-height:1.6}

    /* PROPERTIES */
    .props{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:18px;
      margin-top:30px;
    }
    .prop{
      border-radius:var(--radius);
      overflow:hidden;
      border:1px solid var(--line);
    }
    .prop img{
      width:100%;
      height:180px;
      object-fit:cover;
    }
    .prop .body{padding:14px}

    /* CONTACT */
    form{display:grid;gap:10px;max-width:500px}
    input,textarea{
      padding:12px;
      border-radius:12px;
      border:1px solid var(--line);
      background:rgba(255,255,255,.03);
      color:var(--ink);
    }

    footer{
      padding:30px 0;
      border-top:1px solid var(--line);
      color:var(--muted);
      font-size:12px;
    }

    @media(max-width:900px){
      .grid3,.props{grid-template-columns:1fr}
      .menu{display:none}
      .hero h1{font-size:40px}
    }
  </style>
</head>

<body>

<header>
  <div class="wrap">
    <nav>
      <div class="brand">Infinity RG</div>
      <div class="menu">
        <a href="#properties">Properties</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#investors">Investors</a>
        <a href="#contact">Contact</a>
      </div>
      <a class="btn primary" href="#contact">Book a Consult</a>
    </nav>
  </div>
</header>

<main class="wrap">

<section class="hero">
  <span>LUXURY REAL ESTATE & PROPERTY MANAGEMENT</span>
  <h1>Premium property, handled end-to-end — discreetly.</h1>
  <p>
    Infinity RG delivers curated acquisitions, full landlord services,
    and value-driven strategies for clients who demand trust and execution.
  </p>
  <div class="hero-actions">
    <a class="btn primary" href="#properties">Explore Properties</a>
    <a class="btn" href="#services">View Services</a>
  </div>
</section>

<section id="properties">
  <h2>Featured Properties</h2>
  <p class="sub">A curated selection. Quality over quantity.</p>

  <div class="props">
    <div class="prop">
      <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858">
      <div class="body"><strong>Modern City Apartment</strong><br><small>Prime location</small></div>
    </div>
    <div class="prop">
      <img src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6">
      <div class="body"><strong>Architectural Villa</strong><br><small>Privacy & lifestyle</small></div>
    </div>
    <div class="prop">
      <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471">
      <div class="body"><strong>Investment-Grade Home</strong><br><small>Value upside</small></div>
    </div>
  </div>
</section>

<section id="services">
  <h2>Services</h2>
  <div class="grid3">
    <div class="card"><h3>Luxury Sales & Acquisition</h3><p>Discreet negotiation and deal execution.</p></div>
    <div class="card"><h3>Property Management</h3><p>Landlord services with reporting and oversight.</p></div>
    <div class="card"><h3>Buy-Refurb-Rent / Sell</h3><p>Value-driven refurbishment strategies.</p></div>
  </div>
</section>

<section id="about">
  <h2>About Infinity RG</h2>
  <p class="sub">
    Built for clients who value trust, discretion, and results.
    Boutique service with professional execution.
  </p>
</section>

<section id="investors">
  <h2>Investors</h2>
  <p class="sub">Structured opportunities focused on income and value uplift.</p>
  <a class="btn primary" href="#contact">Request Opportunities</a>
</section>

<section id="contact">
  <h2>Contact</h2>
  <p class="sub">Private consultation — online or in person.</p>

  <form>
    <input placeholder="Full name" required>
    <input type="email" placeholder="Email" required>
    <textarea placeholder="How can we help?" required></textarea>
    <button class="btn primary">Send message</button>
  </form>
</section>

</main>

<footer>
  <div class="wrap">
    © <span id="year"></span> Infinity RG — Luxury Real Estate & Property Management
  </div>
</footer>

<script>
  document.getElementById("year").textContent = new Date().getFullYear();
</script>

</body>
</html>
