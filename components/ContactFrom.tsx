"use client";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { contactInfo } from "../data/portfolioData";

const ContactForm = () => {
	return (
		<div className="container-form flex flex-col lg:flex-row gap-[50px] w-full">
			{/* Form */}
			<div className="form flex-1 order-2 lg:order-none lg:ml-15">
				<form
					action="https://formsubmit.co/jgut.2499@gmail.com"
					method="POST"
					className="flex flex-col gap-4 bg-[#232329] p-7 rounded-xl shadow-lg"
				>
					<h3 className="title text-4xl text-center text-emerald-500 font-semibold">
						{contactInfo.title}
					</h3>
					<p className="text-white/60 text-center lg:text-left">
						{contactInfo.description}
					</p>

					{/* Protection */}
					<input type="hidden" name="_captcha" value="false" />
					<input
						type="hidden"
						name="_next"
						value="https://portafolio-omega-lyart.vercel.app/"
					/>
					{/* Honeypot */}
					<input type="text" name="_honey" style={{ display: "none" }} />

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<Input
							type="text"
							name="firstname"
							placeholder="Nombre"
							autoComplete="given-name"
							required
						/>
						<Input
							type="text"
							name="lastname"
							placeholder="Apellido"
							autoComplete="family-name"
							required
						/>
						<Input
							type="email"
							name="email"
							placeholder="Correo electrónico"
							autoComplete="email"
							required
						/>
						<Input
							type="tel"
							name="phone"
							placeholder="Teléfono"
							autoComplete="tel"
						/>
					</div>

					<Textarea
						name="message"
						rows={5}
						required
						className="h-[150px]"
						placeholder="Escribe tu mensaje aquí..."
					/>

					<Button
						size="md"
						type="submit"
						className="max-w-40 self-center lg:self-start hover:bg-emerald-600 hover:text-white transition-al bg-[rgba(65,47,123,0.15)] border border-emerald-500 text-white/80"
					>
						Enviar mensaje
					</Button>
				</form>
			</div>

			{/* Contact info */}
			<div className="flex flex-1 items-center lg:justify-center order-1 lg:order-none mb-8 lg:mb-0 lg:ml-0 ml-5">
				<ul className="flex flex-col gap-10">
					{contactInfo.info.map((info) => (
						<li key={info.id} className="flex items-center gap-6">
							<div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] text-emerald-500 rounded-md flex items-center justify-center bg-[#232329] hover:bg-[rgba(65,47,123,0.15)]">
								<span className="text-[28px]">{info.icon}</span>
							</div>
							<div className="flex-1">
								<h3 className="text-white/60 text-sm">{info.fieldName}</h3>
								<p className="text-lg">{info.fieldValue}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ContactForm;
