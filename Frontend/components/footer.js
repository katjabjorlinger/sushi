// components/footer.js
export default {
    name: "Footer",
    template: `
      <footer class="bg-dark text-light py-5 mt-5">
        <div class="container">
          <div class="row text-center text-md-start">
            <div class="col-md-4 mb-4">
              <h5 class="text-uppercase fw-bold">Omakase Stockholm </h5>
              <p> Drottninggatan 12 <br />111 51 Stockholm</p>
              <p>08-123 45 678</p>
              <p> Öppet: Mån-Sön 11:00 - 22:00</p>
            </div>
            <div class="col-md-4 mb-4">
              <h5 class="text-uppercase fw-bold">🍣 Meny </h5>
              <ul class="list-unstyled">
                <li><a href="/menu" class="text-light text-decoration-none">Sushi & Rolls</a></li>
                <li><a href="/menu" class="text-light text-decoration-none">Omakase</a></li>
                <li><a href="/menu" class="text-light text-decoration-none">Vegetariskt</a></li>
              </ul>
            </div>
            <div class="col-md-4 mb-4">
              <h5 class="text-uppercase fw-bold">Följ oss </h5>
              <a href="#" class="text-light me-3"><i class="bi bi-instagram"></i></a>
              <a href="#" class="text-light me-3"><i class="bi bi-facebook"></i></a>
              <a href="#" class="text-light"><i class="bi bi-tiktok"></i></a>
            </div>
          </div>
        </div>
        





        <p>&copy; 2025 Omakase. All rights reserved.</p>
      </footer>
    `,
  };
  