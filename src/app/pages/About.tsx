export function About() {
  return (
    <div>
      {/* Hero */}
      <div className="relative h-[60vh] bg-secondary">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-light text-white max-w-2xl">
              Về Chúng Tôi
            </h1>
          </div>
        </div>
      </div>

      {/* Story */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light mb-6">Câu Chuyện Của Chúng Tôi</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              MINIMALIST được thành lập vào năm 2020 với niềm đam mê tạo ra những sản phẩm thời trang
              tối giản, chất lượng cao cho giới trẻ Việt Nam. Chúng tôi tin rằng vẻ đẹp nằm ở sự đơn giản,
              và mỗi thiết kế đều được chăm chút kỹ lưỡng để mang đến sự thoải mái và phong cách cho
              người mặc.
            </p>
            <p>
              Với đội ngũ thiết kế trẻ trung, sáng tạo, chúng tôi không ngừng nghiên cứu và cập nhật
              xu hướng thời trang thế giới để mang đến những bộ sưu tập phù hợp với phong cách sống
              hiện đại. Mỗi sản phẩm đều được làm từ chất liệu cao cấp, quy trình sản xuất nghiêm ngặt
              để đảm bảo chất lượng tốt nhất.
            </p>
            <p>
              Sứ mệnh của chúng tôi là giúp mọi người tự tin thể hiện phong cách riêng thông qua
              trang phục, đồng thời góp phần xây dựng ngành thời trang bền vững và có trách nhiệm
              với môi trường.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-center mb-12">Giá Trị Cốt Lõi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center mx-auto mb-4 text-2xl">
                1
              </div>
              <h3 className="font-medium mb-3">Chất Lượng</h3>
              <p className="text-muted-foreground">
                Cam kết mang đến sản phẩm chất lượng cao, bền đẹp theo thời gian
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center mx-auto mb-4 text-2xl">
                2
              </div>
              <h3 className="font-medium mb-3">Tối Giản</h3>
              <p className="text-muted-foreground">
                Thiết kế tối giản, tinh tế, dễ dàng phối đồ và phù hợp mọi dịp
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center mx-auto mb-4 text-2xl">
                3
              </div>
              <h3 className="font-medium mb-3">Bền Vững</h3>
              <p className="text-muted-foreground">
                Sản xuất có trách nhiệm, hướng đến thời trang bền vững và thân thiện môi trường
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Images */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="aspect-square bg-secondary overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80"
              alt="Our Store"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square bg-secondary overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea1f0c90?w=800&q=80"
              alt="Our Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-light mb-2">2020</p>
              <p className="text-muted-foreground">Thành lập</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-light mb-2">50K+</p>
              <p className="text-muted-foreground">Khách hàng</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-light mb-2">500+</p>
              <p className="text-muted-foreground">Sản phẩm</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-light mb-2">10</p>
              <p className="text-muted-foreground">Chi nhánh</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
